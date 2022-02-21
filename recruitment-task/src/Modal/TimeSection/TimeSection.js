import React from "react";
import { Form } from 'react-bootstrap';
import { Section, SectionTitle, SectionContent, SectionSeparator } from '../MainModalStyled.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainModal.css';

export default function TimeSection({ schedule, day, setDay, hour, setHour }) {

    switch(schedule) {
        case "Specyific Date":
            return (
                <Section>
                    <SectionTitle>Date</SectionTitle>
                    <SectionContent>
                        <Form.Group className='mb-0'>
                            <Form.Control
                                type="date"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            />
                            <SectionSeparator>at</SectionSeparator>
                            <Form.Control
                                type="time"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                            />
                            <SectionSeparator />
                        </Form.Group>
                    </SectionContent>
                </Section>
            )
        case "Daily":
            return (
                <Section>
                    <SectionTitle>Everyday at</SectionTitle>
                    <SectionContent>
                        <Form.Group className='mb-0'>
                            <Form.Control
                                type="time"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                            />
                            <SectionSeparator />
                        </Form.Group>
                    </SectionContent>
                </Section>
            )
        case "Weekly":
            return (
                <Section>
                    <SectionTitle>Every</SectionTitle>
                    <SectionContent>
                        <Form.Group className='mb-0'>
                            <Form.Select size="lg" value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </Form.Select>
                            <SectionSeparator>at</SectionSeparator>
                            <Form.Control
                                type="time"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                            />
                            <SectionSeparator />
                        </Form.Group>
                    </SectionContent>
                </Section>
            )
        default:
            return (
                <Section>
                    <SectionTitle />
                    <SectionContent />
                </Section>
            )
    }
}