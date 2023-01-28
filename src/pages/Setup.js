import React, { useState } from "react";
import styles from "./Setup.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Setup = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stampsToRedeem, setStampsToRedeem] = useState(0);



    return (
        <>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <p className={styles.heading}>Set up your Loyalty Programme</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Gali's Rewards Programme" 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Enter the title you want to see on your loyalty card.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Write your terms and conditions. 
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stamps To Redeem Reward</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={stampsToRedeem}
                                onChange={e => setStampsToRedeem(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We recommend a number between 6 and 10. 
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create my Loyalty Programme
                        </Button>
                    </Form>
                </div>
                <div className={styles.cardContainer}>
                    <p className={styles.heading}>Sample Loyalty Card</p>
                    <div className={styles.card}>
                        <div className={styles.textContainer}>
                            <p className={styles.cardTitle}>{title}</p>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.cardDescription}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Setup;