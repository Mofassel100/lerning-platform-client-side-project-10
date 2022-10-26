import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What id cors ?  </Accordion.Header>
          <Accordion.Body>
          "Learn all about CORS, the difference between simple and preflighted requests, and how to add CORS support to an existing Node Express app!"
          Most of the time, a script running in the user's browser would only ever need to access resources on the same origin (think about API calls to the same backend that served the JavaScript code in the first place). So the fact that JavaScript can't normally access resources on other origins is a good thing for security. React SPA that makes calls to an API backend running on a different domain. Web fonts also rely on CORS to work.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase ? What other options do you have to implement authentication ?</Accordion.Header>
          <Accordion.Body>
          Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!
          One layer of security that all networks and applications need is authentication. Read up on six authentication types, from 2FA to biometrics to certificates.Authentication methods include something users know, something users have and something users are. Not every authentication type is created equal to protect the network, however; these authentication methods range from offering basic protection to stronger security. Using more than one method -- multifactor authentication (MFA) -- is recommended

          </Accordion.Body>
          <Accordion.Header>How does the private route work ?</Accordion.Header>
          <Accordion.Body>
          Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
          </Accordion.Body>
          <Accordion.Header>What is node ? How does node work?</Accordion.Header>
          <Accordion.Body>
          Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
          Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blog;