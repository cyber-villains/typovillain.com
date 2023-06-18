import React, {useState, useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import Cookies from 'js-cookie';
import Modal from 'react-modal';
import Layout from '@theme/Layout';
import { logout } from '../utils/util';

function getAccount(setU) {
    fetch( 'https://api.villain.network/user',
    {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Forbidden") {
            throw new Error('unauthorized')
        } else {
            setU(data);
        }
    })
    .catch((error) => {
        console.log('not authenticated.');
        logout();
    })
}

const AddProjectForm = (props) => (
    <div>
        <Formik
            initialValues={{
                name: '',
                description: '',
            }}
            onSubmit={async (values) => {
                const xCSRF = Cookies.get('CSRF');
                fetch( 'https://api.villain.network/project/add',
                {
                    method: 'POST',
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        "X-CSRF": xCSRF
                    },
                    body: JSON.stringify({
                        name: values.name,
                        description: values.description
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Forbidden") {
                        throw new Error('unauthorized')
                    } else {
                        props.uGetter(props.uSetter);
                        props.setter(false);
                    }
                })
                .catch((error) => {
                    console.log('not authenticated.');
                    window.location.replace("https://villain.network/");
                });
            }}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form>
                            <label htmlFor="name">Project Name<span className='text--danger'>*</span></label>
                            <Field
                                className='mb-5'
                                id="name"
                                name="name"
                                placeholder="The best project!"
                                type="text"
                            />
                            <label htmlFor="description">Project Description</label>
                            <Field
                                className='mb-5' 
                                id="description"
                                name="description"
                                cols="30"
                                placeholder="This project will surely add value!"
                                type="textarea"
                            />
                            <button disabled={isSubmitting} className='mt-5 button button--primary' type="submit">Add Project</button>
                            <button className='mt-5 button button--secondary' onClick={() => props.setter(false)}>Cancel</button>
                        </Form>
                    </>
                )}
        </Formik>
    </div>
);

function SecretHider(props) {
    const [showKey, setShow] = useState(false);
    const handleShow = () => setShow(true);
    if (!showKey) {
        return (
            <>
                <a href="#" onClick={handleShow}>
                    <span className="badge badge--secondary">Click to reveal</span>
                </a>
            </>
        )
    } else {
        return (
            <span>
                {props.secret}
            </span>
        );
    }
}

const DeleteProjectForm = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        console.log("hello")
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
    <div>
        <a href="#" onClick={openModal}><span className="badge badge--danger">Delete</span></a>
        <Modal
            className="card"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
                content: {
                    color: '#eee',
                    width: '550px',
                    height: 'auto',
                    margin: 'auto',
                    marginTop: '5em',
                    transition: 'opacity 500ms ease'
                }}}
        >
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                    }}
                    onSubmit={(values) => {
                        const xCSRF = Cookies.get('CSRF');                        
                        fetch( 'https://api.villain.network/project/' + props.project.client_id,
                        {
                            method: 'DELETE',
                            credentials: 'include',
                            mode: 'cors',
                            headers: {
                                "X-CSRF": xCSRF
                            }
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            props.uGetter(props.uSetter);
                            closeModal();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }}
                    >
                        {({ isSubmitting }) => (
                            <>
                            <div className='card__body'>
                                <div className="alert alert--danger mb-0" role="alert">
                                    <h3><strong>Head's up!</strong></h3>
                                    <p>You're about to delete the project, {props.project.name}.</p>
                                    <h5>Note:</h5> 
                                    <p>Any metadata associate with this Project will not be deleted and instead become hidden and disassociated with this Project.</p>
                                </div>
                                <Form>
                                    <button disabled={isSubmitting} className='mt-5 button button--danger' type="submit">Yes, Delete Project</button>
                                    <button className='mt-5 button button--outline button--secondary' onClick={() => closeModal()}>Cancel</button>
                                </Form>
                            </div>
                            </>
                        )}
                </Formik>
            </div>
        </Modal>
    </div>
    );
}

const DisplayProjects = (props) => {
    return (
        <div className='table-wrap'>
            <table className='aw table-sm projects'>
                <tbody>
                    <tr>
                        <th className="th-left" scope="col">Actions</th>
                        <td>
                            <DeleteProjectForm 
                                project={props.projects[0]} 
                                uSetter={props.uSetter}
                                uGetter={props.uGetter}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="th-left" scope="col">Name</th>
                        <td>{props.projects[0].name}</td>
                    </tr>
                    <tr>
                        <th className="th-left" scope="col">Description</th>
                        <td>{props.projects[0].description}</td>
                    </tr>
                    <tr>
                        <th className="th-left" scope="col">Client ID</th>
                        <td>{props.projects[0].client_id}</td>
                    </tr>
                    <tr>
                        <th className="th-left" scope="col">Client Secret</th>
                        <td><SecretHider secret={props.projects[0].client_secret}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function Profile() {
    const [user, setUser] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    
    // attempt to load user
    useEffect(() => {
        if (user === null) {
            getAccount(setUser);
        }
      }, [user]);
    console.log(user);
    let body;
    if ((user === null) || (user.projects === undefined)) {
        body = (
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        );
    } else if (user.projects.length < 1) {
        body = (
            <>
            <h4>Building something cool?</h4>
            <p>Set up a project and start using the Villain Toolkit APIs in your applications.</p>
            { showAddModal ? '' : <a onClick={() => setShowAddModal(true)} className='button button--primary'>New Project</a> }      
            { showAddModal ? <AddProjectForm setter={setShowAddModal} uSetter={setUser} uGetter={getAccount}/> : ''}  
            </>
        );
    } else {
        body = (
            <DisplayProjects 
                projects={user.projects} 
                uSetter={setUser}
                uGetter={getAccount}
        />)
    }

    return (
        <Layout title="Profile" description="Profile Page">
            <div className='container mb-5'>
                <div className='row' style={{marginTop: '2em', marginBottom: '2em'}}>
                    <div className='col col--4'>
                        <div className='card card-b padding--md'>
                            <div className='card__header'>
                                <h3>User Info</h3>
                            </div>
                            <div className="card__body">
                                <ul style={{listStyle: 'none'}} className='pl-0'>
                                    <li>{ user !== null ? user.username : "..."}</li>
                                    <li>{ user !== null ? user.email : "..."}</li>
                                    <li><span className="mt-5 badge badge--secondary">FREE TIER</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='card card-b padding--md' style={{marginTop: '15px', marginBottom: '1em'}}>
                            <div className='card__header'>
                                <h3>Settings</h3>
                            </div>
                            <div className="card__footer">
                                {/* <a className='button button--outline button--primary button--block' onClick={() => props.setter(false)}>Change Email</a> */}
                                {/* <a className='mt-5 button button--outline button--primary button--block' onClick={() => props.setter(false)}>Change Password</a> */}
                                <a className='mt-5 button button--outline button--primary button--block' onClick={() => logout() }>Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className='col col--8'>
                        <div className='card card-b padding--md'>
                            <div className='card__header'>
                                <h3>Projects</h3>
                            </div>
                            <div className="card__body">
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
