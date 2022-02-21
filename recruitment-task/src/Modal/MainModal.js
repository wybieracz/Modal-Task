import React, { useState } from "react";
import { Form, Modal, Button } from 'react-bootstrap';
import { Section, SectionTitle, SectionContent, SectionSeparator } from './MainModalStyled.js';
import TimeSection from "./TimeSection/TimeSection.js";
import { makeRequest, makeAuth, checkInputs } from "./MainModalUtility.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainModal.css';

export default function MainModal() {

    const [name, setName] = useState("");
    const [format, setFormat] = useState("Excel");
    const [email, setEmail] = useState("");
    const [schedule, setSchedule] = useState("No Repeat");
    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");

    function handleOnClick() {
        if(checkInputs(name, email, schedule, day, hour)) alert("Please input all values!")
        else makeRequest(name, format, email, schedule, day, hour)
    }

    return(
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Export Report</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Section>
                    <SectionTitle>Report name</SectionTitle>
                    <SectionContent>
                        <Form.Group className='mb-0'>
                            <Form.Control
                                placeholder="Shareablee Report"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>Format</SectionTitle>
                    <SectionContent>
                        <div key="inline-radio" className="mb-0">
                            <Form.Check
                                inline
                                label="Excel"
                                name="group1"
                                type="radio"
                                id="radio-excel"
                                defaultChecked={true}
                                onChange={(e) => {if(e.target.checked) setFormat("Excel")}}
                            />
                            <Form.Check
                                inline
                                label="CSV"
                                name="group1"
                                type="radio"
                                id="radio-csv"
                                onChange={(e) => {if(e.target.checked) setFormat("CSV")}}
                            />
                        </div>
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>E-mail to</SectionTitle>
                    <SectionContent>
                        <Form.Group className='mb-0'>
                            <Form.Control
                                type="email"
                                placeholder="client@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>Schedule</SectionTitle>
                    <SectionContent>
                        <div key="inline-radio" className="mb-0">
                            <Form.Check
                                inline
                                label="No Repeat"
                                name="group2"
                                type="radio"
                                id="radio-no-repeat"
                                defaultChecked={true}
                                onChange={(e) => {if(e.target.checked) setSchedule("No Repeat"); setDay(""); setHour("")}}
                            />
                            <Form.Check
                                inline
                                label="Specyific Date"
                                name="group2"
                                type="radio"
                                id="radio-sepcific-date"
                                onChange={(e) => {if(e.target.checked) setSchedule("Specyific Date"); setDay(""); setHour("")}}
                            />
                            <Form.Check
                                inline
                                label="Daily"
                                name="group2"
                                type="radio"
                                id="radio-daily"
                                onChange={(e) => {if(e.target.checked) setSchedule("Daily"); setDay(""); setHour("")}}
                            />
                            <Form.Check
                                inline
                                label="Weekly"
                                name="group2"
                                type="radio"
                                id="radio-weekly"
                                onChange={(e) => {if(e.target.checked) setSchedule("Weekly"); setDay("Monday"); setHour("")}}
                            />
                        </div>
                    </SectionContent>
                </Section>
                <TimeSection schedule={schedule} day={day} setDay={setDay} hour={hour} setHour={setHour} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button onClick={handleOnClick} variant="primary">OK</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}