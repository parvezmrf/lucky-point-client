import React from 'react';

const Blog = () => {
    return (
        <div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content bg-base-200">
                    <p>The five critical differences between SQL vs NoSQL are: <br /> <br />

                        SQL databases are relational, NoSQL databases are non-relational.<br />
                        SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br />
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br />
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-base-200">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />  <br />

                        How JWT Works<br />  <br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br /><br />

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br /><br />

                        Once decoded, you will get two JSON strings:
                        <br /><br />
                        The header and the payload.<br />
                        The signature.<br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                        <br /><br />
                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br /><br />

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.<br /><br />

                        The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.  </p>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-base-200">
                    <figure className="table">
                        <h3 className="text-2xl"> Difference between Nodejs and JavaScript : </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Javascript</th>
                                    <th>NodeJS</th>
                                </tr>
                            </thead>
                            <tbody className='container w-50'>

                                <tr>
                                    <td>1.</td>
                                    <td>
                                        <p>Javascript is a programming language that is used <br /> for writing scripts on the
                                            website.<br /></p>

                                    </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the <br /> help of NodeJS.</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Javascript is capable enough to add <br /> HTML and play with the DOM.<br /></td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>Javascript can run in any browser engine as <br />like JS core in safari and Spidermonkey in
                                        Firefox.<br /></td>
                                    <td>V8 is the Javascript engine inside of node.js <br /> that parses and runs Javascript.</td>
                                </tr>
                                <tr>
                                    <td>6.</td>
                                    <td>Javascript is used in frontend development.</td>
                                    <td>Nodejs is used in server-side development.</td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>Some of the javascript frameworks are RamdaJS, <br /> TypedJS, etc.</td>
                                    <td>Some of the Nodejs modules are Lodash, express etc. <br /> These modules are to be imported from
                                        npm.<br /></td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>It is the upgraded version of ECMA <br /> script that uses Chrome's V8 engine written in
                                        C++.<br /></td>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-base-200">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;