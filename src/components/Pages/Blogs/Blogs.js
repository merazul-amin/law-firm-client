import React from 'react';
import { Helmet } from "react-helmet";
const Blogs = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <Helmet>
                <title>Blogs- Law Firm</title>
            </Helmet>
            {/* Question 1 */}
            <div className='my-4'>
                <h1 className='text-2xl my-3'>1. What are the Difference between SQL and NoSQL?</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system</td>

                            </tr>

                            <tr>
                                <th>2</th>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>

                            </tr>

                            <tr>
                                <th>3</th>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>

                            </tr>
                            <tr>
                                <th>3</th>
                                <td>These databases are best suited for complex queries.</td>
                                <td>These databases are not so good for complex queries</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Follows ACID property</td>
                                <td>	Follows CAP(consistency, availability, partition tolerance)</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            {/* question 2 */}
            <div>
                <h1 className='text-2xl my-3'>2. What is JWT, and how does it work?</h1>
                <div>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />

                    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it. <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </div>
            </div>

            {/* question 3 */}
            <div className='my-9'>
                <h1 className='text-2xl my-3'>3. What is the difference between javascript and NodeJS?</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>JavaScript</th>
                                <th>NodeJS</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>
                                    Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td>NodeJS is a Javascript runtime environment.</td>

                            </tr>

                            <tr>
                                <th>2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                            </tr>

                            <tr>
                                <th>3</th>
                                <td>	It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side</td>

                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                </td>
                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


            {/* Question 4 */}
            <div className='my-5'>
                <h1 className='my-4 text-3xl'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <div>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. <br />

                    How is NodeJS better than traditional multithreaded request response model?
                    With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                </div>
            </div>
        </div>
    );
};

export default Blogs;