import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Toy Cars Store | Blogs";
  }, []);
    return (
        <div className="my-10">
        <div className="card bg-blue-50 shadow-xl mt-5">
  <div className="card-body">
  <p className='text-xl font-medium'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
  <p><span className='text-xl font-medium'>Ans : </span>An access token is a credential that is issued by an authentication server upon successful authentication of a user or client application.A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process.<br></br> Access tokens and refresh tokens work together in a typical authentication and authorization flow.The client includes the access token in each request to a protected resource. This is typically done by adding the access token to the HTTP headers, commonly using the Authorization header with the Bearer scheme.When the access token expires, the client can send a request to the authentication server, providing the refresh token.
The server validates the refresh token and, if valid, issues a new access token to the client.<br></br>Regarding storage on the client-side: Access tokens are typically short-lived and meant to be used within a single session or request. Therefore, they are often stored in memory or a short-term storage mechanism, such as a client-side session or a browser local storage.The recommended approach is to store refresh tokens in a secure, HTTP-only cookie or another secure storage mechanism provided by the platform or framework being used. </p>
  </div>
</div>
            <div className="card bg-blue-50 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>2. Compare SQL and NoSQL databases?</p>
  <p><span className='text-xl font-medium'>Ans : </span>The five critical differences between SQL and NoSQL are :<li>SQL databases are relational, and NoSQL databases are non-relational.</li>
  <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
  <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
  <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
  <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
  </p>
  </div>
</div>
            <div className="card bg-blue-50 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>3. What is express js? What is Nest JS?</p>
  <p><span className='text-xl font-medium'>Ans : </span>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It is a layer built on the top of the Node js that helps manage servers and routes.It is free and open source.<br></br> Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.For building a large-scale enterprise application with complex business logic, NestJS is be the better choice.</p>
  </div>
</div>
            <div className="card bg-blue-50 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>4. What is MongoDB aggregate and how does it work?</p>
  <p><span className='text-xl font-medium'>Ans : </span>MongoDB aggregation framework is a powerful feature that allows for advanced data processing and analysis within MongoDB. It provides a way to perform complex queries, transformations, aggregations, and computations on the data stored in MongoDB collections.<br></br>Here is an overview of how MongoDB aggregation framework works:
  <li>Pipeline Stages:
The aggregation pipeline consists of multiple stages, each representing a transformation or operation on the data. Each stage takes input from the previous stage and produces output for the next stage.</li>
  <li>Pipeline Operators:
Within each stage of the pipeline, operators are used to perform specific actions on the data. MongoDB provides a wide range of operators to facilitate aggregation.</li>
  <li>Execution:
When the aggregation pipeline is executed, MongoDB applies each stage of the pipeline sequentially to the input data. At each stage, the data is transformed based on the specified operations.</li>
  <li>Result:
The final result of the aggregation pipeline can include aggregated values, calculated fields, transformed documents, or any other data structure based on the operations performed in the pipeline. The output can be returned as a cursor or stored in a new collection for further analysis or retrieval.</li>
</p>
  </div>
</div>            
        </div>
    );
};

export default Blogs;