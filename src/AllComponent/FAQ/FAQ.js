import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='w-100'>
            <div className='mx-auto' >
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What does a Software Developer do? </Accordion.Header>
                        <Accordion.Body>
                            Software Developers typically work for corporations across industries, but they can also work for IT firms or as self-employed individuals. They work closely with other Software Developers and IT professionals to create, troubleshoot and revamp software systems. Their job is to create instructional documents and coding libraries so other software developers can make adjustments in the future. They may also be responsible for reviewing customer service data to discover potential defects and gauge the level of customer satisfaction with a new program.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Software Developer skills and qualifications </Accordion.Header>
                        <Accordion.Body>
                            A successful Software Developer candidate will have various prerequisite skills/qualifications needed for duties. In this section, you can include the educational qualifications, skills and work experience applicants must have before applying for your role. Here are some

                        </Accordion.Body>
                        <Accordion.Header>Software Developer salary expectations</Accordion.Header>
                        <Accordion.Body>
                            A Software Developer makes an average of $93,340 per year. Salary may depend on level of experience, education and the geographical location.
                        </Accordion.Body>
                        <Accordion.Header>Software Developer experience requirements</Accordion.Header>
                        <Accordion.Body>
                            The ideal candidate will be familiar with the software development life cycle including the planning, design, development and implementation, deployment and maintenance stages. They also require an in-depth knowledge of different programming languages, frameworks and tools.

                            Software Developers will know how to write elegant code based on product specifications and requirements. They should be familiar with testing, debugging and improving their code and the work of their team members to deliver products on schedule.

                            The ability to learn new programming languages, collect feedback and improve existing software is a desirable quality in applicants. They also require a good understanding of algorithms, flow charts and mathematical concepts that form the basis of computer programming.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

        </div>
    );
};

export default FAQ;