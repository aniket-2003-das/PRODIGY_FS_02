import { useEffect, useState } from "react";
import { Button, Col, Table, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error while fetching users", error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdate = (userId) => {
        navigate(`/user/${userId}`);
    };

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: "DELETE",
                body: JSON.stringify(userId)
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error("Error while deleting user", error.message);
        }
    };
    
    return (
        <Container className="dashboard-container mt-5">
            <Row>
                <Col>
                    <h1 className="text-center">Dashboard (Employee List)</h1>
                    <Table striped bordered hover responsive className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Button
                                            variant="outline-primary"
                                            onClick={() => handleUpdate(user._id)}
                                        >
                                            Update
                                        </Button>{" "}
                                        <Button
                                            variant="outline-danger"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
