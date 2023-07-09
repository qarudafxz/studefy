Studefy is a web-based application, developed as our final project in IT106. 
It leverages XML and DOM Parser in conjunction with Java Remote Method Invocation.
The application consists of two node.js powered servers. These servers communicate 
with a DOMParser implemented in Java through multi-threading and multiple/fork processes 
in node.js. This setup allows for the execution of a script that runs the Java file. 
Additionally, one of the servers directly interacts with an SQL database, 
primarily serving as a storage solution for persisting the parsed data obtained from the XML.

Here is the system architecture (if it actually makes sense lol):

<img src="src\assets\arch.jpg"/>

And here is the snippet of the project:

<img src="src\assets\snap.png"/>
