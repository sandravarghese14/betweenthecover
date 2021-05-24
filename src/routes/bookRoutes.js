const express = require('express');
const booksRouter = express.Router();

function router(nav){


var books =[
    {
        "title": "Unlocking Android: A Developer's Guide",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": { "$date": "2009-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
        "categories": ["Open Source", "Mobile"]
    },
    
    {
        "title": "Flex 4 in Action",
        "isbn": "1935182420",
        "pageCount": 600,
        "publishedDate": { "$date": "2010-11-15T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
        "longDescription": "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    ",
        "status": "PUBLISH",
        "authors": ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
        "categories": ["Internet"]
    },
    {
        "title": "Collective Intelligence in Action",
        "isbn": "1933988312",
        "pageCount": 425,
        "publishedDate": { "$date": "2008-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
        "longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.   ",
        "status": "PUBLISH",
        "authors": ["Satnam Alag"],
        "categories": ["Internet"]
    },
    {
        "title": "Zend Framework in Action",
        "isbn": "1933988320",
        "pageCount": 432,
        "publishedDate": { "$date": "2008-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
        "shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
        "longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.       ",
        "status": "PUBLISH",
        "authors": ["Rob Allen", "Nick Lo", "Steven Brown"],
        "categories": ["Web Development"]
    },
    {
        "title": "Flex on Java",
        "isbn": "1933988797",
        "pageCount": 265,
        "publishedDate": { "$date": "2010-10-15T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
        "shortDescription": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
        "longDescription": "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.   ",
        "status": "PUBLISH",
        "authors": ["Bernerd Allmon", "Jeremy Anderson"],
        "categories": ["Internet"]
    },
    {
        "title": "Griffon in Action",
        "isbn": "1935182234",
        "pageCount": 375,
        "publishedDate": { "$date": "2012-06-04T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
        "shortDescription": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
        "longDescription": "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
        "status": "PUBLISH",
        "authors": ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
        "categories": ["Java"]
    },
    {
        "title": "OSGi in Depth",
        "isbn": "193518217X",
        "pageCount": 325,
        "publishedDate": { "$date": "2011-12-12T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
        "shortDescription": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
        "longDescription": "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
        "status": "PUBLISH",
        "authors": ["Alexandre de Castro Alves"],
        "categories": ["Java"]
    },
    {
        "title": "Flexible Rails",
        "isbn": "1933988509",
        "pageCount": 592,
        "publishedDate": { "$date": "2008-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
        "shortDescription": "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"",
        "longDescription": "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
        "status": "PUBLISH",
        "authors": ["Peter Armstrong"],
        "categories": ["Web Development"]
    },
    {
        "title": "Hello! Flex 4",
        "isbn": "1933988762",
        "pageCount": 258,
        "publishedDate": { "$date": "2009-11-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
        "shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
        "longDescription": "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
        "status": "PUBLISH",
        "authors": ["Peter Armstrong"],
        "categories": ["Internet"]
    },
    {
        "title": "Coffeehouse",
        "isbn": "1884777384",
        "pageCount": 316,
        "publishedDate": { "$date": "1997-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
        "shortDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
        "longDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form. It showcases over forty individual web writers, among them Joseph Squier, Martha Conway, Jason Snell, David Alexander, Carl Steadman and Walter Miller. The intent is to show the variety and vitality of the web's blossoming literary \"scene,\" and to capture the unique and highly iconoclastic \"personality\" of the web community.",
        "status": "PUBLISH",
        "authors": ["Levi Asher", "Christian Crumlish"],
        "categories": ["Miscellaneous"]
    },
    {
        "title": "Team Foundation Server 2008 in Action",
        "isbn": "1933988592",
        "pageCount": 344,
        "publishedDate": { "$date": "2008-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
        "longDescription": "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.    Microsoft Team Foundation .",
        "status": "PUBLISH",
        "authors": ["Jamil Azher"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Brownfield Application Development in .NET",
        "isbn": "1933988711",
        "pageCount": 550,
        "publishedDate": { "$date": "2010-04-16T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        "longDescription": "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
        
        "status": "PUBLISH",
        "authors": ["Kyle Baley", "Donald Belcham"],
        "categories": ["Microsoft"]
    },
    {
        "title": "MongoDB in Action",
        "isbn": "1935182870",
        "pageCount": 0,
        "publishedDate": { "$date": "2011-12-12T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
        "longDescription": "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
       
        "status": "PUBLISH",
        "authors": ["Kyle Banker"],
        "categories": ["Next Generation Databases"]
    },
   
    {
        "title": "Jaguar Development with PowerBuilder 7",
        "isbn": "1884777864",
        "pageCount": 550,
        "publishedDate": { "$date": "1999-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg",
        "shortDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
        "longDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.    Jaguar Development with PowerBuilder 7 focuses on getting you up to speed on Jaguar and PowerBuilder, and it is packed with code samples to guide you every step of the way. It covers each step involved in application development, from setting up the development environment to deploying a production application.    Even a PowerBuilder developer with no experience in distributed technologies or Jaguar CTS will learn what it takes to build an application. Jaguar Development with PowerBuilder 7 covers:    Developing Component-centric Applications  Building Jaguar CTS Components/Clients  CORBA  Adaptive SQL Anywhere  Adaptive Server Enterprise  and lots more!",
        "status": "PUBLISH",
        "authors": ["Michael Barlotta"],
        "categories": ["PowerBuilder", "Client-Server"]
    },
    {
        "title": "Taming Jaguar",
        "isbn": "1884777686",
        "pageCount": 362,
        "publishedDate": { "$date": "2000-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
        "longDescription": "Taming Jaguar is part of the PowerBuilder Developer's series, which includes Distributed Application Development with PowerBuilder 6 and Jaguar Development with PowerBuilder 7.    An application server is the heart of your enterprise computing architecture, centralizing your web content, business logic, and access to your data and legacy applications. Sybase's application server, Jaguar CTS, delivers performance, scalability, and flexibility running CORBA , COM, Java/EJB, C++, and PowerBuilder components.    If you are looking to adopt Jaguar in your enterprise, look no further. Taming Jaguar shows you how to solve the real-world problems of installing, trouble-shooting, designing, developing, and maintaining a Jaguar application. Topical chapters are organized in a Q & A format making it easy for you to quickly find the solution to your problem. They also provide foundational and background information as well as detailed technical how-tos.    Although designed so you can find your problems easily, this book is meant to be read cover-to-cover with each chapter discussing its topic exhaustively.    What's inside:    J2EE development  Java Servlets  Jaguar administration & code balancing  EJBs  Web development with PowerDynamo  Advanced component design ",
        "status": "PUBLISH",
        "authors": ["Michael J. Barlotta", "Jason R. Weiss"],
        "categories": ["PowerBuilder"]
    },
    {
        "title": "3D User Interfaces with Java 3D",
        "isbn": "1884777902",
        "pageCount": 520,
        "publishedDate": { "$date": "2000-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
        "longDescription": "3D User Interfaces with Java 3D is a practical guide for providing next-generation applications with 3D user interfaces for manipulation of in-scene objects. Emphasis is on standalone and web-based business applications, such as for online sales and mass customization, but much of what this book offers has broad applicability to 3D user interfaces in other pursuits such as scientific visualization and gaming.  This book provides an extensive conceptual framework for 3D user interface techniques, and an in-depth introduction to user interface support in the Java 3D API, including such topics as picking, collision, and drag-and-drop. Many of the techniques are demonstrated in a Java 3D software framework included with the book, which also provides developers with many general-purpose building blocks for constructing their own user interfaces.    Applications and their use of 3D are approached realistically. The book is geared towards sophisticated user interfaces for the \"everyday user\" who doesn't have a lot of time to learn another application--much less a complicated one--and an everyday computer system without exotic devices like head mounted displays and data gloves. Perhaps the best description of this book is: \"A roadmap from Java 3D to 'Swing 3D'.\"",
        "status": "PUBLISH",
        "authors": ["Jon Barrilleaux"],
        "categories": ["Java", "Computer Graphics"]
    },
    {
        "title": "Agile ALM",
        "isbn": "1935182633",
        "pageCount": 0,
        "publishedDate": { "$date": "2011-08-20T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/huettermann.jpg",
        "shortDescription": "Many software projects fail unnecessarily because of unclear objectives, redundant and unproductive work, cost overruns, and a host of other avoidable process problems. In response, agile processes and lightweight tooling have begun to replace traditional engineering processes throughout the development lifecycle. An agile approach to application lifecycle management improves product quality, reduces time to market, and makes for happier developers.    Agile ALM is a guide for Java developers who want to integrate flexible agile practices and lightweight tooling along all phases of the software development process. The book introduces a new vision for managing change in requirements and process more efficiently and flexibly. You'll learn powerful practices like task-based Development, where you align activities into tasks resulting in traceable artifacts, Continuous Integration, in which you frequently and systematically integrate, build, and test an application in development and using Scrum as an agile approach to release management. The effect is a more comprehensive and practical approach to build, configuration, deployment, release, test, quality, integration, and requirements management.    This book synthesizes technical and functional elements to provide a comprehensive approach to software development. You'll learn to see the whole scope of the development process as a set of defined tasks, many of which are repeated daily, and then master the tools and practices you need to accomplish each of those tasks efficiently.    Because efficient tool chains can radically improve the speed and fluidity of the development process, this book demonstrates how to integrate state-of-the-art lightweight tools. Many of the tools and examples are Java-based, but the Agile ALM principles apply to all development platforms. As well, the many examples show how you can bridge different languages and systems.",
        "longDescription": "Many software projects fail unnecessarily because of unclear objectives, redundant and unproductive work, cost overruns, and a host of other avoidable process problems. In response, agile processes and lightweight tooling have begun to replace traditional engineering processes throughout the development lifecycle. An agile approach to application lifecycle management improves product quality, reduces time to market, and makes for happier developers.    Agile ALM is a guide for Java developers who want to integrate flexible agile practices and lightweight tooling along all phases of the software development process. The book introduces a new vision for managing change in requirements and process more efficiently and flexibly. You'll learn powerful practices like task-based Development, where you align activities into tasks resulting in traceable artifacts, Continuous Integration, in which you frequently and systematically integrate, build, and test an application in development and using Scrum as an agile approach to release management. The effect is a more comprehensive and practical approach to build, configuration, deployment, release, test, quality, integration, and requirements management.    This book synthesizes technical and functional elements to provide a comprehensive approach to software development. You'll learn to see the whole scope of the development process as a set of defined tasks, many of which are repeated daily, and then master the tools and practices you need to accomplish each of those tasks efficiently.    Because efficient tool chains can radically improve the speed and fluidity of the development process, this book demonstrates how to integrate state-of-the-art lightweight tools. Many of the tools and examples are Java-based, but the Agile ALM principles apply to all development platforms. As well, the many examples show how you can bridge different languages and systems.",
        "status": "PUBLISH",
        "authors": ["Michael Hüttermann"],
        "categories": ["Software Engineering"]
    },
    {
        "title": "Hibernate in Action",
        "isbn": "193239415X",
        "pageCount": 400,
        "publishedDate": { "$date": "2004-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
        "shortDescription": "\"2005 Best Java Book!\" -- Java Developer's Journal",
        "longDescription": "Hibernate practically exploded on the Java scene. Why is this open-source tool so popular  Because it automates a tedious task: persisting your Java objects to a relational database. The inevitable mismatch between your object-oriented code and the relational database requires you to write code that maps one to the other. This code is often complex, tedious and costly to develop. Hibernate does the mapping for you.    Not only that, Hibernate makes it easy. Positioned as a layer between your application and your database, Hibernate takes care of loading and saving of objects. Hibernate applications are cheaper, more portable, and more resilient to change. And they perform better than anything you are likely to develop yourself.    Hibernate in Action carefully explains the concepts you need, then gets you going. It builds on a single example to show you how to use Hibernate in practice, how to deal with concurrency and transactions, how to efficiently retrieve objects and use caching.    The authors created Hibernate and they field questions from the Hibernate community every day - they know how to make Hibernate sing. Knowledge and insight seep out of every pore of this book.",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
    {
        "title": "Hibernate in Action (Chinese Edition)",
        "pageCount": 400,
        "publishedDate": { "$date": "1999-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
    {
        "title": "Java Persistence with Hibernate",
        "isbn": "1932394885",
        "pageCount": 880,
        "publishedDate": { "$date": "2006-11-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
        "shortDescription": "\"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book.\" --JavaLobby",
        "longDescription": "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
    {
        "title": "JSTL in Action",
        "isbn": "1930110529",
        "pageCount": 480,
        "publishedDate": { "$date": "2002-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
        "longDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language. JSTL is a standard from the Java Community Process, and its expression language will become part of JSP 2.0.    JSTL in Action shows you how to write rich, dynamic web pages without programming. From simple loops to tricky XML processing, every feature of JSTL is covered and exercised in numerous useful examples. Whether you are a novice page author or an experienced Java programmer, this book shows you easy ways to create powerful web sites.    To help readers who don't already have a JSP container run the examples in the book, there's a free companion download here. This bundle contains a ready-to-run JSP container, a JSTL implementation, and all the book's examples.",
        "status": "PUBLISH",
        "authors": ["Shawn Bayern"],
        "categories": ["Internet"]
    },
    {
        "title": "iBATIS in Action",
        "isbn": "1932394826",
        "pageCount": 384,
        "publishedDate": { "$date": "2007-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
        "shortDescription": "   Gets new users going and gives experienced users in-depth coverage of advanced features.       Jeff Cunningham, The Weather Channel Interactive",
        "longDescription": "Unlike some complex and invasive persistence solutions, iBATIS keeps O/RM clean and simple. It is an elegant persistence framework that maps classes to SQL statements and keeps the learning curve flat. The iBATIS approach makes apps easy to code, test, and deploy. You write regular SQL and iBATIS gives you standard objects for persistence and retrieval. There   s no need to change existing database schemas   iBATIS is tolerant of legacy databases (even badly designed ones).    iBATIS in Action is a comprehensive tutorial on the framework and an introduction to the iBATIS philosophy. Clinton Begin and coauthors lead you through the core features, including configuration, statements, and transactions. Because you   ll need more than the basics, it explores sophisticated topics like Dynamic SQL and data layer abstraction. You   ll also learn a useful skill: how to extend iBATIS itself. A complete, detailed example shows you how to put iBATIS to work. Topics are clearly organized and easily accessible for reference.",
        "status": "PUBLISH",
        "authors": ["Clinton Begin", "Brandon Goodin", "Larry Meadors"],
        "categories": ["Web Development"]
    },
    
    {
        "title": "Hibernate Search in Action",
        "isbn": "1933988649",
        "pageCount": 488,
        "publishedDate": { "$date": "2008-12-21T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
        "shortDescription": "\"A great resource for true database independent full text search.\" --Aaron Walker, base2Services",
        "longDescription": "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.    Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.    Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.    Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.",
        "status": "PUBLISH",
        "authors": ["Emmanuel Bernard", "John Griffin"],
        "categories": ["Java"]
    },
    {
        "title": "jQuery in Action",
        "isbn": "1933988355",
        "pageCount": 376,
        "publishedDate": { "$date": "2008-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
        "shortDescription": "\"The best-thought-out and researched piece of literature on the jQuery library.\" --From the forward by John Resig, Creator of jQuery",
        "longDescription": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique    chaining    model lets you perform multiple operations on a page element in succession, as in  (   div.elements   ).addClass(   myClass   ).load(   ajax_url   ).fadeIn()    jQuery in Action is a fast-paced introduction and guide. It shows you how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique    lab pages    anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
        "status": "PUBLISH",
        "authors": ["Bear Bibeault", "Yehuda Katz"],
        "categories": ["Web Development"]
    },
    {
        "title": "jQuery in Action, Second Edition",
        "isbn": "1935182323",
        "pageCount": 488,
        "publishedDate": { "$date": "2010-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
        "shortDescription": "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level. An in-depth rewrite of the bestselling first edition, this edition provides deep and practical coverage of the latest jQuery and jQuery UI releases. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. This comprehensive guide also teaches you how jQuery interacts with other tools and frameworks and how to build jQuery plugins. ",
        "longDescription": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique \"chaining\" model lets you perform multiple operations on a page element in succession. And with version 1.4, there's even more to love about jQuery, including new effects and events, usability improvements, and more testing options.    jQuery in Action, Second Edition is a fast-paced introduction and guide. Building on the bestselling first edition, it adds new examples, more labs, and deeper explanations of important features. You   ll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
        "status": "PUBLISH",
        "authors": ["Bear Bibeault", "Yehuda Katz"],
        "categories": ["Java"]
    },
    {
        "title": "Building Secure and Reliable Network Applications",
        "isbn": "1884777295",
        "pageCount": 591,
        "publishedDate": { "$date": "1996-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
        "shortDescription": "\"... tackles the difficult problem of building reliable distributed computing systems in a way that not only presents the principles but also describes proven practical solutions.\" --John Warne, BNR Europe",
        "longDescription": "As the \"network is the computer\" slogan becomes reality so reliability and security of networked applications become more important. Not only are hospitals, air traffic control systems, and telephone networks becoming more networked, but business applications are increasingly based on the open world of the Internet. Stability in the face of minor accidents, software or hardware failures, or outright attack has become vital. This book provides a structured approach to the technologies currently available for building reliable solutions to these problems.    Building Secure and Reliable Network Applications reviews the most important network technologies from a security and reliability perspective and discusses the most effective solutions with an eye towards their application to real-world systems. Any computing professional who works with networked software will find this book valuable in understanding security and reliability vulnerabilities and how to address them.",
        "status": "PUBLISH",
        "authors": ["Kenneth P. Birman"],
        "categories": ["Networking", "Theory"]
    },
    {
        "title": "Ruby for Rails",
        "isbn": "1932394699",
        "pageCount": 532,
        "publishedDate": { "$date": "2006-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
        "shortDescription": "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
        "longDescription": "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
        "status": "PUBLISH",
        "authors": ["David A. Black"],
        "categories": ["Web Development"]
    },
    {
        "title": "The Well-Grounded Rubyist",
        "isbn": "1933988657",
        "pageCount": 520,
        "publishedDate": { "$date": "2009-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
        "shortDescription": "What would appear to be the most complex topic of the book is in fact surprisingly easy to assimilate, and one realizes that the efforts of the author to gradually lead us to a sufficient knowledge of Ruby in order to tackle without pain the most difficult subjects, bears its fruit.       Eric Grimois, Developpez.com",
        "longDescription": "Interest in Ruby has exploded. Developers discovering this elegant, dynamic language quickly learn that Ruby is a powerful alternative to traditional static languages like Java or C++. It runs in most operating environments and can handle virtually any programming task you throw at it. Ruby code is clean and elegant. Best of all, Ruby is dynamic, which means that it's designed to react at runtime to changes in an application's environment or requirements.    The Well-Grounded Rubyist takes you from interested novice to proficient practitioner. It's a beautifully written tutorial that begins with the basic steps to get your first Ruby program up and running and goes on to explore sophisticated topics like callable objects, reflection, and threading The book concentrates on the language, preparing you for any way you may choose to use Ruby. Whether the topic is simple or tough, the book's easy-to-follow examples and explanations give you immediate confidence as you build your Ruby programming skills.    The Well-Grounded Rubyist is a thoroughly revised and updated edition of the best-selling Ruby for Rails. In this new book, expert author David A. Black moves beyond Rails and presents a broader view of Ruby. It covers Ruby 1.9, and keeps the same sharp focus and clear writing that made Ruby for Rails stand out.    It's no wonder one reader commented: \"The technical depth is just right to not distract beginners, yet detailed enough for more advanced readers.\"",
        "status": "PUBLISH",
        "authors": ["David A. Black"],
        "categories": ["Programming"]
    },
    {
        "title": "Website Owner's Manual",
        "isbn": "1933988452",
        "pageCount": 296,
        "publishedDate": { "$date": "2009-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg",
        "shortDescription": "Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
        "longDescription": "Just because you're responsible for your organization's web presence doesn't mean you know how to build a website. The job of planning, launching, and managing a site often falls to people who have little or no experience in web design or development. Website Owner's Manual is a book for the thousands of marketers, IT managers, project leaders, and business owners who need to put a website in place and keep it running with a minimum of trouble.    Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
        "status": "PUBLISH",
        "authors": ["Paul A. Boag"],
        "categories": ["Internet"]
    },
    {
        "title": "ASP.NET 4.0 in Practice",
        "isbn": "1935182463",
        "pageCount": 504,
        "publishedDate": { "$date": "2011-05-15T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg",
        "shortDescription": "ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews.",
        "longDescription": "ASP.NET is an established technology to build web applications using Microsoft products. It drives a number of enterprise-level web sites around the world, but it can be scaled for projects of any size. The new version 4.0 is an evolutionary step: you will find a lot of new features that you will be able to leverage to build better web applications with minimal effort.    ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews. Using a practical Problem-Solution-Discussion format, it will guide you through the most common scenarios you will face in a typical ASP.NET application, and provide solutions and suggestions to take your applications to another level.",
        "status": "PUBLISH",
        "authors": [
            "Daniele Bochicchio",
            "Stefano Mostarda",
            "",
            "Marco De Sanctis"
        ],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Hello! Python",
        "isbn": "1935182080",
        "pageCount": 350,
        "publishedDate": { "$date": "2012-02-13T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
        "shortDescription": "Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.",
        "longDescription": "Learn Python the fast and fun way! Hello! Python is a fully-illustrated, project-driven tutorial designed to get you up and running with Python, no experience required. It's full of projects that help you learn the way most programmers do   one step at a time, starting with the basics, and then applying your new skills in useful programs.    Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.    The book presents several practical projects, including games, business, and graphical applications. Each example provides a solid base for you to develop your own programs. As you dig into Python, you'll see how programs are created, and the reasons behind the technical decisions.    The book covers Python's large standard library gradually and in the context of sample apps, so the reader isn't overwhelmed with a large number of library functions to absorb all at once. Upon completing the book, the reader will have a good grasp of Python, know several technologies and libraries related to Python and be able to identify many resources for future growth as a programmer.",
        "status": "PUBLISH",
        "authors": ["Anthony Briggs"],
        "categories": ["Python"]
    },
    {
        "title": "PFC Programmer's Reference Manual",
        "isbn": "1884777554",
        "pageCount": 368,
        "publishedDate": { "$date": "1998-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brooks.jpg",
        "longDescription": "PFC Programmers' Reference Manual provides information that should prove indispensible for the PowerBuilder programmer trying to learn the PowerBuilder Foundation Classes. It lists all of the objects and functions that they might use for a project with notes from the author on each function. Service-based architecture and appropriate object-oriented techniques are stressed throughout.    The more difficult objects and services are given special attention; these are the ones that are sure to enhance your image as an expert in this emerging technology. The text is written with the same easy-to-understand prose that has marked the PowerBuilder Dojo as one of the premier PowerBuilder sites worldwide.    At first, the programmer will find this book a comprehensive guide to the wide scope of these libraries. Later it will serve as a handy memory tool for finding exactly what is needed at implementation time.    The manager will find this book an invaluable source for understanding which tools are available for immediate implementation.    PFC Programmers' Reference Manual covers PowerBuilder version 6 as well as version 5",
        "status": "PUBLISH",
        "authors": ["Richard Brooks"],
        "categories": ["PowerBuilder"]
    },
    {
        "title": "Graphics File Formats",
        "isbn": "133034054",
        "pageCount": 484,
        "publishedDate": { "$date": "1995-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
        "longDescription": "Graphics File Formats is a comprehensive guide to the file formats used in computer graphics and related areas. It discusses implementation and design of file formats in a readable style focusing on the basic issues important for the evaluation or development of file formats, including  data types  design goals  color  data organization  data encoding  data compression  classification  and conversion  The second part of the book provides summaries of over 50 graphics file formats in commercial use, such as CGM, DDES, FITS, MPEG, PICT, PostScript, TIFF, QuickTime, RIB, SunRaster, and X bitmap. Following a uniform organization, these summaries are handy reference sources for those needing basic information on these formats.    Written by two computer experts, this book is intended for graphics professionals, programmers and all those in commercial, engineering and scientific applications areas who need to make decisions related to file formats from graphical data.",
        "status": "PUBLISH",
        "authors": ["C. Wayne Brown", "Barry J. Shepherd"],
        "categories": ["Computer Graphics"]
    },
    {
        "title": "Visual Object Oriented Programming",
        "isbn": "131723979",
        "pageCount": 280,
        "publishedDate": { "$date": "1995-02-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
        "longDescription": "This first book on the union of two rapidly growing approaches to programming--visual programming and object technology--provides a window on a subject of increasing commercial importance. It is an introduction and reference for cutting-edge developers, and for researchers, students, and enthusiasts interested in the design of visual OOP languages and environments.  Visual Object-Oriented Programming includes chapters on both emerging research and on a few classic systems, that together can help those who design visual object-oriented programming systems avoid some known pitfalls. The book contains an experience report on the use of available visual programming languages in a commercial setting, and chapters, by some of the leaders of this cutting-edge subject, covering systems such as Prograph, VIPR, PURSUIT, ThingLab II, Vampire, Forms/3, Self's environment, Vista, SPE, and Cerno.",
        "status": "PUBLISH",
        "authors": ["Margaret M. Burnett", "Adele Goldberg", "", "Ted G. Lewis"],
        "categories": ["Programming"]
    },
    {
        "title": "iOS in Practice",
        "isbn": "1617291269",
        "pageCount": 325,
        "publishedDate": { "$date": "2013-11-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cahill.jpg",
        "status": "PUBLISH",
        "authors": ["Bear P. Cahill"],
        "categories": ["Mobile Technology"]
    },
    {
        "title": "iPhone in Action",
        "isbn": "193398886X",
        "pageCount": 472,
        "publishedDate": { "$date": "2008-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/callen.jpg",
        "shortDescription": "   There is not another iPhone title that does such a great coverage of both Web and SDK topics under one roof, thus providing a well-rounded developer education.       Vladimir Pasman, Cocoacast.com",
        "longDescription": "The iPhone explodes old ideas of a cell phone. Its native SDK offers a remarkable range of features including easy-to-build graphical objects, a unique navigation system, and a built-in database, all on a location-knowledgeable device. Websites and web apps can now behave like native iPhone apps, with great network integration.    iPhone in Action is an in-depth introduction to both native and web programming for the iPhone. You'll learn how to turn your web pages into compelling iPhone web apps using WebKit, iUI, and Canvas. The authors also take you step by step into more complex Objective-C programming. They help you master the iPhone SDK including its UI and features like accelerometers, GPS, the Address Book, SQLite, and many more. Using Apple's standard tools like Dashcode, Xcode, and Interface Builder, you'll learn how to best use both approaches: iPhone web and SDK programming.    This book is intended as an introduction to its topics. Proficiency with C, Cocoa, or Objective-C is helpful but not required.",
        "status": "PUBLISH",
        "authors": ["Christopher Allen", "Shannon Appelcline"],
        "categories": ["Web Development"]
    },
    {
        "title": "Silverlight 2 in Action",
        "isbn": "1933988428",
        "pageCount": 400,
        "publishedDate": { "$date": "2008-10-31T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campbell.jpg",
        "shortDescription": "   Silverlight 2 in Action gives you a solid, well-thought out and coherent foundation for building RIA web applications, and provides you with lots of technical details without ever becoming cloudy.       Golo Roden, author, trainer and speaker for .NET technologies",
        "longDescription": "Microsoft describes Silverlight as a \"cross-browser, cross-platform plug-in for delivering the next generation of .NET based media experiences and rich interactive applications for the Web.\" That's a really boring description for a really exciting new technology. Anyone who has looked at the demos and gotten a taste of what Silverlight can do knows that Silverlight represents an entirely new level of rich web interface technology for Microsoft developers. With Silverlight 2, developers can use JavaScript, VB, C#, Python, and Ruby to build user-friendly, interactive, and visually-dazzling web applications that work in most major browsers.    Silverlight 2 in Action is the first book to cover Silverlight 2, a far more robust implementation of Silverlight than the current 1 release that supports only JavaScript. The much-anticipated 2 release adds powerful new features along with the ability to code in multiple languages and integrate your work with Visual Studio and the new Expression suite of tools. This book delivers real-world examples and in-depth walkthroughs to help you confidently enhance your web applications using Silverlight 2.    Silverlight 2 in Action devotes extensive coverage to flexible layout components, the extensible control model, the communication framework, and the data-binding features   all cornerstones of software development. Author and Microsoft MVP Chad Campbell also describes rich media and vivid graphical and animation features. The final chapters include a variety of Silverlight deployment scenarios.    In addition to the fundamentals of Silverlight, you'll be introduced to architectural components such as the Silverlight object model. The book addresses the developer/designer collaboration model Silverlight enables, showing the developer how to include the designer effectively in the project workflow. This model is illustrated throughout the examples.    For ongoing reader support, the author will maintain a dedicated book-support website providing up-to-the-minute working examples, complete with source code, all in Silverlight.",
        "status": "PUBLISH",
        "authors": ["Chad A. Campbell", "John Stockton"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "The Quick Python Book, Second Edition",
        "isbn": "193518220X",
        "pageCount": 360,
        "publishedDate": { "$date": "2010-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg",
        "shortDescription": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.",
        "longDescription": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.    After exploring Python's syntax, control flow, and basic data structures, the book shows how to create, test, and deploy full applications and larger code libraries. It addresses established Python features as well as the advanced object-oriented options available in Python 3. Along the way, you'll survey the current Python development landscape, including GUI programming, testing, database access, and web frameworks.    WHAT'S INSIDE:        * Concepts and Python 3 features      * Regular expressions and testing      * Python tools      * All the Python you need   nothing you don't",
        "status": "PUBLISH",
        "authors": ["Naomi R. Ceder"],
        "categories": ["Python"]
    },
    {
        "title": "Internet and Intranet Applications with PowerBuilder 6",
        "isbn": "1884777600",
        "pageCount": 390,
        "publishedDate": { "$date": "2000-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cervenka.jpg",
        "longDescription": "If you're a PowerBuilder programmer, Internet and Intranet Applications with PowerBuilder 6 is your ticket to learning Web.PB and related technologies. The book covers everything you need to know to build web browser and server programs with the PowerBuilder 6 Internet Toolkit. Also covered is how to write winsock programs with PB, and Distributed PB is covered to the extent necessary to learn Web.PB.",
        "status": "PUBLISH",
        "authors": ["Tom Cervenka"],
        "categories": ["PowerBuilder"]
    },
    
    {
        "title": "Mobile Agents",
        "isbn": "1884777368",
        "pageCount": 320,
        "publishedDate": { "$date": "1997-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
        "shortDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.",
        "longDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet. The book presents the reality of today's agent technologies and the future that this technology promises. It teaches how to create and deploy the major mobile agent systems (Telescript, Agent Tcl, Ara, Aglets Workbench) and how to solve a variety of problems on the Internet. Each of the chapters was written in collaboration with the original developers of the agent systems.",
        "status": "PUBLISH",
        "authors": ["William R. Cockayne and Michael Zyda", "editors"],
        "categories": ["Internet"]
    },
    {
        "title": "Spring Dynamic Modules in Action",
        "isbn": "1935182307",
        "pageCount": 450,
        "publishedDate": { "$date": "2010-09-04T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg",
        "shortDescription": "Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.",
        "longDescription": "OSGi is increasingly familiar to Java coders working in distributed environments, but the tools required to implement OSGi-based systems have been slow to develop. Spring Dynamic Modules (Spring DM) is a framework designed to make it easy to build Spring apps that take advantage of the OSGi approach to modular Java development. It simplifies the task of creating true component and service oriented architectures in an OSGi environment using all the powerful features of the Spring framework.    Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.",
        "status": "PUBLISH",
        "authors": ["Arnaud Cogoluegnes", "Thierry Templier", "", "Andy Piper"],
        "categories": ["Java"]
    },
    {
        "title": "SQL Server 2008 Administration in Action",
        "isbn": "193398872X",
        "pageCount": 468,
        "publishedDate": { "$date": "2009-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/colledge.jpg",
        "longDescription": "The integrity and security of your database is crucial to your business. SQL Server 2008 is a massive and mature product with a very large feature set. As a SQL Server administrator, you must be equipped to handle myriad day-to-day tasks to keep your database healthy, and you must also be prepared to act quickly when something unexpected happens.    SQL Server 2008 Administration in Action offers over 100 DBA-tested, high-value, best practices that will help you tame the beast and keep it under control. Unlike the many comprehensive SQL Server reference tomes out there that attempt to cover the whole SQL Server feature set, this book drills down on the techniques, procedures, and practices that help you keep your database running like clockwork.    SQL Server 2008 Administration in Action focuses the production DBA, digging deep into the various tasks specific to that role. Expert author Rod Colledge--check him out at sqlCrunch.com--teaches you best practices that cover the lifecycle of a SQL Server system, including infrastructure design, installation, and operational maintenance. And while many of these techniques will work in any recent version of SQL Server, you'll find full coverage of emerging SQL Server 2008 best practices.    Each technique is presented in a task-driven style, and in the order of the typical life cycle of a SQL Server system. This allows you to easily open the book at the appropriate page and focus on what you need to know for each specific situation.",
        "status": "PUBLISH",
        "authors": ["Rod Colledge"],
        "categories": ["Microsoft"]
    },
    {
        "title": "Android in Practice",
        "isbn": "1935182927",
        "pageCount": 500,
        "publishedDate": { "$date": "2011-09-30T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/collins.jpg",
        "shortDescription": "Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.",
        "longDescription": "Android, Google's platform for mobile application development, provides powerful features, a robust SDK, and almost limitless possibilities. It's not hard to find the information you need to build your first Android app, but then what  If you want to build real apps for real users, you have real questions and you need real answers.    Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.    If you're new to Android, or even if you have a few cycles under your belt, you'll love the quick \"pre-flight check,\" where you'll review key platform details and tools and the building blocks of all Android applications. Then, you'll delve into Android use cases   from visual elements and style, to saving and sharing data, networking, background tasks, concurrency, and more.",
        "status": "PUBLISH",
        "authors": [
            "Charlie Collins",
            "Michael D. Galpin",
            "",
            "Matthias Kaeppler"
        ],
        "categories": ["Mobile Technology"]
    },
    {
        "title": "Object Oriented Perl",
        "isbn": "1884777791",
        "pageCount": 512,
        "publishedDate": { "$date": "1999-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/conway.jpg",
        "longDescription": "Object Oriented Perl is designed to provide anyone who is familiar with the basics of regular Perl programming with a complete introduction to the object-oriented features of Perl. The book moves from the very simplest applications through advanced applications such as generic programming, multiple dispatch, and object-oriented persistence. Thus, it offers a much-needed resource for persons new to Perl, as well as new and valuable insights and techniques for even the most accomplished Perl programmers.    Beyond explaining the syntax and semantics of Perl's inbuilt object-oriented features, Object Oriented Perl explains how to apply those features in a wide range of programming techniques. Each technique is illustrated with complete examples.    Object Oriented Perl also discusses the latest relevant Perl modules, which are freely available and can greatly simplify object-oriented development in Perl. In particular, it examines the new standard \"fields\" module and the associated pseudo-hash construct.    No other book covers the topic of object-oriented software development in Perl in such breadth, to such depth, or in such a readable manner. Complete source code for Object Oriented Perl is available online to owners of the book.",
        "status": "PUBLISH",
        "authors": ["Damian Conway"],
        "categories": ["Object-Oriented Programming", "P"]
    },
    {
        "title": "GWT in Practice",
        "isbn": "1933988290",
        "pageCount": 376,
        "publishedDate": { "$date": "2008-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cooper.jpg",
        "longDescription": "If you   re a web developer, you already know that you can use Ajax to add rich, user-friendly, dynamic features to your applications. With the Google Web Toolkit (GWT), a new Ajax tool from Google that automatically converts Java to JavaScript, you can build Ajax applications using the Java language. GWT lets you focus on application design and functionality, rather than on browser differences, and allows you to re-use code throughout the layers of your applications.    GWT in Practice is an example-driven, code-rich book designed for web developers who have already learned the basics of GWT. After a quick review of GWT fundamentals, GWT in Practice presents scores of handy, reusable solutions to the problems you face when you need to move beyond    Hello World    and    proof of concept    applications. This book skips the theory and looks at the way things really work when you   re building projects in GWT.    You   ll learn    How to create and customize widgets  The ins and outs of RPC  Packaging and building with Maven and Ant  Using the Java Persistence API with GWT  Effective internationalization  GWT in Practice shows you where GWT fits into the Enterprise Java developer's toolset. Written by expert authors Robert Cooper and Charlie Collins, this book combines sharp insight with hard-won experience. Readers will find thorough coverage of all aspects of GWT development from the basic GWT concepts and essentials to in-depth and complete real world example applications. If you know the basics and are ready to get your hands dirty, then you need this book.",
        "status": "PUBLISH",
        "authors": ["Robert Cooper", "Charles Collins"],
        "categories": ["Web Development"]
    },
    {
        "title": "Ajax in Action",
        "isbn": "1932394613",
        "pageCount": 680,
        "publishedDate": { "$date": "2005-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane.jpg",
        "longDescription": "Web users are getting tired of the traditional web experience. They get frustrated losing their scroll position; they get annoyed waiting for refresh; they struggle to reorient themselves on every new page. And the list goes on. With asynchronous JavaScript and XML, known as \"Ajax,\" you can give them a better experience. Once users have experienced an Ajax interface, they hate to go back. Ajax is new way of thinking that can result in a flowing and intuitive interaction with the user.\n<br>\n<i>Ajax in Action</i> helps you implement that thinking--it explains how to distribute the application between the client and the server (hint: use a \"nested MVC\" design) while retaining the integrity of the system. You will learn how to ensure your app is flexible and maintainable, and how good, structured design can help avoid problems like browser incompatibilities. Along the way it helps you unlearn many old coding habits. Above all, it opens your mind to the many advantages gained by placing much of the processing in the browser. If you are a web developer who has prior experience with web technologies, this book is for you.",
        "status": "PUBLISH",
        "authors": ["Dave Crane", "Eric Pascarello with Darren James"],
        "categories": ["XML", "Internet"]
    },
    {
        "title": "Ajax in Practice",
        "isbn": "1932394990",
        "pageCount": 536,
        "publishedDate": { "$date": "2007-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane2.jpg",
        "longDescription": "Ajax gives web developers the potential to create rich user-centered Internet applications. But Ajax also adds a new level of complexity and sophistication to those applications. Ajax in Practice tackles Ajax head-on, providing countless hands-on techniques and tons of reusable code to address the specific issues developers face when building Ajax-driven solutions.    After a brief overview of Ajax, this book takes the reader through dozens of working examples, presented in an easy-to-use cookbook format. Readers will learn how to implement drag-and-drop interfaces and discover how to create effective navigation strategies for their applications. Unlike a traditional cookbook, Ajax in Practice provides a thorough discussion of each technique presented and shows how the individual components can be connected to create powerful solutions. A fun \"mash-up\" chapter concludes the book. Throughout the book, the examples chosen are interesting, entertaining, and practical.    With this book you will:  Go beyond what Ajax is and learn how to put Ajax to work.  Master numerous techniques for user interface design and site navigation.  Work hands-on with professional-grade reusable Ajax code designed to solve real problems.",
        "status": "PUBLISH",
        "authors": [
            "Dave Crane",
            "Jord Sonneveld and Bear Bibeault with Ted Goddard",
            "Chris Gray",
            "Ram Venkataraman",
            "Joe Walker"
        ],
        "categories": ["Web Development"]
    },
    {
        "title": "Prototype and Scriptaculous in Action",
        "isbn": "1933988037",
        "pageCount": 544,
        "publishedDate": { "$date": "2007-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane3.jpg",
        "longDescription": "Common Ajax tasks should be easy, and with Prototype and Scriptaculous they are. Prototype and Scriptaculous are libraries of reusable JavaScript code that simplify Ajax development. Prototype provides helpful methods and objects that extend JavaScript in a safe, consistent way. Its clever Ajax request model simplifies cross-browser development. Scriptaculous, which is based on Prototype, offers handy pre-fabricated widgets for rich UI development.    Prototype and Scriptaculous in Action is a comprehensive, practical guide that walks you feature-by-feature through the two libraries. First, you   ll use Scriptaculous to make easy but powerful UI improvements. Then you   ll dig into Prototype   s elegant and sparse syntax. See how a few characters of Prototype code can save a dozen lines of JavaScript. By applying these techniques, you can concentrate on the function and flow of your application instead of the coding details. This book is written for web developers with a working knowledge of JavaScript.",
        "status": "PUBLISH",
        "authors": ["Dave Crane", "Bear Bibeault with Tom Locke"],
        "categories": ["Web Development"]
    },
    {
        "title": "POJOs in Action",
        "isbn": "1932394583",
        "pageCount": 592,
        "publishedDate": { "$date": "2006-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crichardson.jpg",
        "shortDescription": "\"POJOs in Action is required reading for battle-weary EJB developers and for new developers who want to avoid the sins of the fathers by using lightweight frameworks.    -- C# Online.NET",
        "longDescription": "There is agreement in the Java community that EJBs often introduce more problems than they solve. Now there is a major trend toward lightweight technologies such as Hibernate, Spring, JDO, iBATIS, and others, all of which allow the developer to work directly with the simpler Plain Old Java Objects, or POJOs. Bowing to the new consensus, EJB 3 now also works with POJOs.    POJOs in Action describes these new, simpler, and faster ways to develop enterprise Java applications. It shows you how to go about making key design decisions, including how to organize and encapsulate the domain logic, access the database, manage transactions, and handle database concurrency.    Written for developers and designers, this is a new-generation Java applications guide. It helps you build lightweight applications that are easier to build, test, and maintain. The book is uniquely practical with design alternatives illustrated through numerous code example",
        "status": "PUBLISH",
        "authors": ["Chris Richardson"],
        "categories": ["Java"]
    },
    {
        "title": "Data Munging with Perl",
        "isbn": "1930110006",
        "pageCount": 304,
        "publishedDate": { "$date": "2001-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cross.jpg",
        "longDescription": "Your desktop dictionary may not include it, but 'munging' is a common term in the programmer's world. Many computing tasks require taking data from one computer system, manipulating it in some way, and passing it to another. Munging can mean manipulating raw data to achieve a final form. It can mean parsing or filtering data, or the many steps required for data recognition. Or it can be something as simple as converting hours worked plus pay rates into a salary cheque.    This book shows you how to process data productively with Perl. It discusses general munging techniques and how to think about data munging problems. You will learn how to decouple the various stages of munging programs, how to design data structures, how to emulate the Unix filter model, etc. If you need to work with complex data formats it will teach you how to do that and also how to build your own tools to process these formats. The book includes detailed techniques for processing HTML and XML. And, it shows you how to build your own parsers to process data of arbitrary complexity.    If you are a programmer who munges data, this book will save you time. It will teach you systematic and powerful techniques using Perl. If you are not a Perl programmer, this book may just convince you to add Perl to your repertoire.",
        "status": "PUBLISH",
        "authors": ["David Cross"],
        "categories": ["Perl"]
    },
    {
        "title": "Hello! HTML5 & CSS3",
        "isbn": "1935182897",
        "pageCount": 325,
        "publishedDate": { "$date": "2012-10-17T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
        "shortDescription": "Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.",
        "longDescription": "HTML and CSS are the foundation of the web, and HTML5 and CSS3 are the latest standards. If you build web pages, mobile apps, or do any type of development at all, you'll have to learn HTML5 and CSS3, so why not start now  Quick and Easy HTML5 and CSS3 will give you a smart, snappy, and fun introduction to building web sites with these really cool new tools.    Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.    Once you've explored the fundamentals of HTML5, it's time to add some style to your pages with CSS3. New CSS features include drop shadows, borders, colors, gradients and backgrounds. In addition, you'll learn to layout your pages with the new flexible box and layout modules, and add the finishing touches with custom fonts. You'll also see how to target specific devices with media queries, and do all of it with less code thanks to the new selectors and pseudo classes.    Finally you will walk through several large examples where you see all the features of HTML5 and CSS3 working together to produce responsive and lightweight applications which you can interact with just like native desktop apps.",
        "status": "PUBLISH",
        "authors": ["Rob Crowther"],
        "categories": ["Internet"]
    },
    {
        "title": "Seam in Action",
        "isbn": "1933988401",
        "pageCount": 624,
        "publishedDate": { "$date": "2008-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dallen.jpg",
        "shortDescription": "Seam in Action goes into great detail on the ways in which Seam helps reduce the burden of integration with different technologies such as Hibernate and JSF, allowing the developer to focus on the core business objective at hand.       Shobana Jayaraman, Digital Infrastructure Analyst, University of Texas Southwestern Medical Center Library, The Tech Static",
        "longDescription": "Seam is an exciting new application framework based on the Java EE platform that you can use to build rich, web-based business applications. Seam is rapidly capturing the interest of Java enterprise developers because of its focus on simplicity, ease of use, transparent integration, scalability, and developer choice.    Seam in Action offers a practical and in-depth look at Seam from outside the walls of RedHat/JBoss. The book puts Seam head-to-head with the complexities in the Java EE architecture. It discusses the shortcomings of JSF, the challenges of using Java persistence in the web environment, and other common development roadblocks, then shows how Seam makes these problems just melt away. In covering Seam, the author doesn't just ask you to sprinkle annotations on your code and expect that you understand how it works. Instead, the author lays down the facts, shows you the steps, reveals the logic, and diagrams the flow, so that by the end of the book, you will not only have gained a deep understanding of Seam, but will also come away ready to teach the material to others.    All too often, developers spend a majority of their time integrating disparate technologies, manually tracking state, struggling to understand JSF, wrestling with Hibernate exceptions, and constantly redeploying applications, rather than on the logic pertaining to the business at hand. Seam in Action dives deep into thorough explanations of how Seam eliminates these non-core tasks by leveraging configuration by exception, Java 5 annotations, and aspect-oriented programming.    To start off, you will see a working Java EE-compliant application come together by the end of the second chapter. As you progress through the book, you will discover how Seam eliminates unnecessary layers and configurations and uses an inversion of control technical known as bijection supplemented by a liberal use of the Unified Expression Language (EL) to establish the missing link between JSF, EJB 3 and JavaBean components. You also witness how Seam opens doors for you to incorporate technologies you previously have not had time to learn, such as business processes and stateful page flows (jBPM), rule-based security, Ajax remoting, PDF generation, Spring integration, and more.",
        "status": "PUBLISH",
        "authors": ["Dan Allen"],
        "categories": ["Java"]
    },
    {
        "title": "Wicket in Action",
        "isbn": "1932394982",
        "pageCount": 392,
        "publishedDate": { "$date": "2008-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dashorst.jpg",
        "longDescription": "Wicket bridges the mismatch between the web's stateless protocol and Java's OO model. The component-based Wicket framework shields you from the HTTP under a web app so you can concentrate on business problems instead of the plumbing code. In Wicket, you use logic-free HTML templates for layout and standard Java for an application's behavior. The result  Coding a web app with Wicket feels more like regular Java programming.    Wicket in Action is a comprehensive guide for Java developers building Wicket-based web applications. It introduces Wicket's structure and components, and moves quickly into examples of Wicket at work. Written by core committers, this book shows you the \"how-to\" and the \"why\" of Wicket. You'll learn to use and customize Wicket components, to interact with Spring and Hibernate, and to implement rich Ajax-driven features.",
        "status": "PUBLISH",
        "authors": ["Martijn Dashorst", "Eelco Hillenius"],
        "categories": ["Web Development"]
    },
    {
        "title": "Open Source SOA",
        "isbn": "1933988541",
        "pageCount": 448,
        "publishedDate": { "$date": "2009-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/davis.jpg",
        "longDescription": "Service Oriented Architecture, or SOA, has become embraced by many organizations as a means of improving reusability of software assets; providing better alignment between business and IT; and, increasing agility for responding to demands in the marketplace. This is accomplished by breaking individual units of functionality into services that can then be exposed through open protocols and standards.    Until recently, many of the software technologies used for developing SOA-based solutions were limited to expensive, commercial offerings. However, that has now changed, and a compelling open source SOA platform can be implemented exclusively with open source products. This book identifies a suite of open source products that can be used for a building SOA environment, and describes how they can be integrated by practitioners. It includes a hands-on introduction to the products selected; a multitude of source code examples; and implementation through real-life case studies.",
        "status": "PUBLISH",
        "authors": ["Jeff Davis"],
        "categories": ["Java"]
    },
    {
        "title": "Struts 2 in Action",
        "isbn": "193398807X",
        "pageCount": 432,
        "publishedDate": { "$date": "2008-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dbrown.jpg",
        "longDescription": "The original Struts project revolutionized Java web development and its rapid adoption resulted in the thousands of Struts-based applications deployed worldwide. Keeping pace with new ideas and trends, Apache Struts 2 has emerged as the product of a merger between the Apache Struts and OpenSymphony WebWork projects, united in their goal to develop an easy-to-use yet feature-rich framework. Struts 2 represents a revolution in design and ease of use when compared to classic Struts. It adds exciting and powerful features such as a plugin framework, JavaServer Faces integration, and XML-free configuration.    Struts 2 In Action introduces the Apache Struts 2 web application framework and shows you how to quickly develop professional, production-ready modern web applications. Written by Don Brown, one of the leading developers of Struts 2, Chad Davis, a passionate Struts 2 developer, along with Scott Stanlick, this book gently walks you through the key features of Struts 2 in example-driven, easy-to-digest sections.    Struts 2 in Action delivers accurate, seasoned information that can immediately be put to work. This book is designed for working Java web developers   especially those with some background in Struts 1 or WebWork. The core content, covering key framework components such as Actions, Results, and Interceptors, includes new features like the annotation-based configuration options. You'll find chapters on Struts 2 plugins, FreeMarker, and migration from Struts 1 and WebWork 2. Finally, new topics such as the Ajax tags, Spring Framework integration, and configuration by convention give familiar subjects new depth.",
        "status": "PUBLISH",
        "authors": ["Donald Brown", "Chad Michael Davis", "", "Scott Stanlick"],
        "categories": ["Java"]
    },
    {
        "title": "Essential Guide to Peoplesoft Development and Customization",
        "isbn": "1884777929",
        "pageCount": 1101,
        "publishedDate": { "$date": "2000-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delia.jpg",
        "longDescription": "The Essential Guide to PeopleSoft Development and Customization is an exhaustive, as well as practical, guide that covers PeopleSoft 7.5 and many new features in release 8.0. Both novice and experienced programmers will benefit from the detailed coverage of topics ranging from the basics of Application Designer to the proper use of PeopleCode within the Application Processor.    The book serves as both a reference and a tutorial and covers advanced topics that other books avoid. The reader can gain valuable expertise by following the exercises and building sample applications and utilities.    Extensive coverage of PeopleCode including scroll and function library examples can be found as well as methodology behind customization and upgrades. Discover how to effectively utilize SQR and Process Scheduler. Master various levels of PeopleSoft security.    Most developers won t touch PeopleSoft COBOL programs with a ten foot pole. Expand your horizons by uncovering the secrets of PeopleSoft COBOL and the PTPSQLRT module and even walk through a sample customization. Application Engine is a powerful PeopleTool - but one of the least understood. Through a series of simple but effective exercises the reader will learn Application Engine concepts such as dynamic SQL, decision logic and dynamic sections. A useful Application Engine utility is produced that will enhance the delivered Process Scheduler panels. This book takes a soup-to-nuts approach leading the reader through the full cycle of application development.    The four authors are truly experts in the field and provide the reader with the skills necessary to compete in the PeopleSoft marketplace for years to come. Special sections are included which provide detailed information on new features in PeopleSoft release 8. The reader will gain valuable insight into the next generation of PeopleTools.    Exciting new features such as the new PeopleCode Debugger and PeopleCode dot notation using a new series of object classes are revealed. Also covered are Application Designer enhancements and improved Process Scheduler design and SQR support.    See firsthand how Application Engine has been turbo-charged with a new line of meta-constructs, PeopleCode actions, file handling capability and a new integrated design. The authors primary goal was not to be the first book on the market... it was to be the best.",
        "status": "PUBLISH",
        "authors": [
            "Tony DeLia",
            "Galina Landres",
            "Isidor Rivera",
            "Prakash Sankaran"
        ],
        "categories": ["Client-Server"]
    },
    {
        "title": ".NET Multithreading",
        "isbn": "1930110545",
        "pageCount": 360,
        "publishedDate": { "$date": "2002-11-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dennis.jpg",
        "longDescription": "If you need high performance, or a rich user experience, you should consider multithreading. With .NET you can develop stable and robust multithreaded applications with minimal effort. .NET Multithreading teaches the basics in an understandable and practical way. It then focuses on .NET's mechanisms for multithreading and shows how easy it can be to develop applications with them. The book covers several design approaches such as one-thread-one-class, the asynchronous design pattern, and using queues as buffers between threads. It explains best practices and how to avoid common multithreading pitfalls such as deadlock and race conditions.    This book is written for intermediate .NET developers who know C# or VB .NET, but are not assumed to have a background in multithreading. It is rich in examples that will help you understand the subject and produce multithreaded applications that have the power of C++ while keeping the ease and reliability of .NET.",
        "status": "PUBLISH",
        "authors": ["Alan Dennis"],
        "categories": ["Microsoft .NET", "Internet"]
    },
    {
        "title": "SCWCD Exam Study Kit Second Edition",
        "isbn": "1932394389",
        "pageCount": 560,
        "publishedDate": { "$date": "2005-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg",
        "longDescription": "With the tremendous penetration of J2EE in the enterprise, passing the Sun Certified Web Component Developer exam has become an important qualification for Java and J2EE developers. To pass the SCWCD exam (Number: 310-081) you need to answer 69 questions in 135 minutes and get 62% of them right. You also need  150 and this (completely updated and newly revised) book.    In its first edition, the SCWCD Exam Study Kit was the most popular book used to pass this most desirable web development certification exam. The new edition will help you learn the concepts    large and small    that you need to know. It covers the newest version of the exam and not a single topic is missed.    The SCWCD exam is for Sun Certified Java Programmers who have a certain amount of experience with Servlets and JSPs, but for those who do not, the book starts with three introductory chapters on these topics. Although the SCWCD Exam Study Kit has one purpose, to help you get certified, you will find yourself returning to it as a reference after passing the exam.",
        "status": "PUBLISH",
        "authors": ["Hanumant Deshmukh", "Jignesh Malavia", "", "Matthew Scarpino"],
        "categories": ["Internet"]
    },
    {
        "title": "Spring Roo in Action",
        "isbn": "193518296X",
        "pageCount": 500,
        "publishedDate": { "$date": "2012-04-13T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rimple.jpg",
        "status": "PUBLISH",
        "authors": ["Ken Rimple", "Srini Penchikala"],
        "categories": ["Java"]
    },
    {
        "title": "SOA Governance in Action",
        "isbn": "1617290270",
        "pageCount": 0,
        "publishedDate": { "$date": "2012-07-27T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dirksen.jpg",
        "status": "PUBLISH",
        "authors": ["Jos Dirksen"],
        "categories": ["java"]
    },
    {
        "title": "RSS and Atom in Action",
        "isbn": "1932394494",
        "pageCount": 400,
        "publishedDate": { "$date": "2006-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dmjohnson.jpg",
        "longDescription": "RSS and Atom in Action is organized into two parts. The first part introduces the blog technologies of newsfeed formats and publishing protocols   the building blocks. The second part shows how to put to those blocks together to assemble interesting and useful blog applications.    In keeping with the principle behind Manning   s    In Action    series, this book shows the reader, through numerous examples in Java and C#, how to parse Atom and RSS format newsfeeds, how to generate valid newsfeeds and serve them efficiently, and howto automate blogging via web services based on the new Atom protocol and the older MetaWeblog API. The book also shows how to develop a complete blog client library that readers can use in their own applications. The second half of the book is devoted to a dozen blog apps   small but immediately useful example applications such as a community aggregator, a file distribution newsfeed, a blog cross-poster, an email-to-blog gateway, Ant tasks for blogging software builds, and more.",
        "status": "PUBLISH",
        "authors": ["Dave Johnson"],
        "categories": ["Internet"]
    },
    {
        "title": "LDAP Programming, Management and Integration",
        "isbn": "1930110405",
        "pageCount": 352,
        "publishedDate": { "$date": "2002-11-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/donley.jpg",
        "longDescription": "LDAP is the leading Internet protocol for directory-like information: user identities, preferences, security privileges. etc. Because it is popular, most programming languages have handy extensions for searching and updating LDAP directories. But most information today is still locked away in application-specific repositories that lack LDAP access.    LDAP Programming, Management and Integration explains how to link non-LDAP data with LDAP directories. It starts with a concise introduction to the LDAP standard and discusses how to work with it in Java and Perl. It gives you practical code and advice for migrating and integrating data into an LDAP environment. And it explains how to increase your application's security using identity and profile information from LDAP repositories.    Written for programmers and system administrators, this book teaches clearly and honestly the LDAP practiced  in the trenches.  It is concise yet rich in practical examples that make a sometimes complex subject easy to understand.",
        "status": "PUBLISH",
        "authors": ["Clayton Donley"],
        "categories": ["Internet"]
    },
    {
        "title": "Mule in Action",
        "isbn": "1933988967",
        "pageCount": 432,
        "publishedDate": { "$date": "2009-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot.jpg",
        "longDescription": "Mule is a widely used open source enterprise service bus. It is standards based, provides easy integration with Spring and JBoss, and fully supports the enterprise messaging patterns collected by Hohpe and Woolf. You can readily customize Mule without writing a lot of new code.    Mule in Action covers Mule fundamentals and best practices. It is a comprehensive tutorial that starts with a quick ESB overview and then gets Mule to work. It dives into core concepts like sending, receiving, routing, and transforming data. Next, it gives you a close look at Mule's standard components and how to roll out custom ones. You'll pick up techniques for testing, performance tuning, BPM orchestration, and even a touch of Groovy scripting.    Written for developers, architects, and IT managers, the book requires familiarity with Java but no previous exposure to Mule or other ESBs.",
        "status": "PUBLISH",
        "authors": ["David Dossot", "John D'Emic"],
        "categories": ["Java", "Software Engineering"]
    },
    {
        "title": "Java Foundation Classes",
        "isbn": "1884777678",
        "pageCount": 1088,
        "publishedDate": { "$date": "2001-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg",
        "longDescription": "Java Foundation Classes: Swing Reference is the comprehensive guide to Swing 1.1 and Java 2's Swing package. Written by the programmers that maintain the Internet's Swing FAQ, this book is based on the much enhanced, most recent release of Swing. All documentation in this book is based on the authors' experience with the Swing source code and their digging under the surface to make sure what they are saying is correct. This book offers solid reference material, extensive examples and an introductory tutorial provide programmers with a quick start and ongoing support as their daily Swing reference. The authors have not trusted a single description of the Swing JavaDoc--this book is verified, correct documentation for the Swing library. For programmers wondering which methods are unimplemented or empty, which are synchronized, which throw runtime exceptions, the JavaDoc won't tell them, but this book will.",
        "status": "PUBLISH",
        "authors": ["Stephen C. Drye", "William C. Wake"],
        "categories": ["Java"]
    },
    {
        "title": "Managing Components with Modeler",
        "isbn": "1932394524k-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal11.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Command-line Processing with CLI",
        "isbn": "1932394524l-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal12.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Understanding and Using Chain",
        "isbn": "1932394524m-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal13.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Working with the Logging and Discovery Components",
        "isbn": "1932394524n-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal14.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Uploading files with FileUpload",
        "isbn": "1932394524b-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal2.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Handling Protocols with the Net Component",
        "isbn": "1932394524c-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal3.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "XML Parsing with Digester",
        "isbn": "1932394524d-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal4.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "JXPath and Betwixt: Working with XML",
        "isbn": "1932394524e-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal5.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Validating Data with Validator",
        "isbn": "1932394524f-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal6.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Enhancing Java Core Libraries with Collections",
        "isbn": "1932394524g-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal7.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Enhancing Java Core Libraries with BeanUtils and Lang",
        "isbn": "1932394524h-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal8.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Pool and DBCP: Creating and Using Object Pools",
        "isbn": "1932394524i-e",
        "pageCount": 0,
        "publishedDate": { "$date": "2005-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal9.jpg",
        "status": "PUBLISH",
        "authors": ["Vikram Goyal"],
        "categories": ["Java"]
    },
    {
        "title": "Python and Tkinter Programming",
        "isbn": "1884777813",
        "pageCount": 688,
        "publishedDate": { "$date": "2000-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg",
        "longDescription": "If you are interested in Python and Tkinter, you have probably noticed that although there is some good contributed documentation on the Web, there is not enough to get Tkinter applications up and running. Python and Tkinter Programming is the answer. It is designed for readers who are familiar with Python and who need to develop applications with Graphical User Interfaces (GUIs).    Python and Tkinter Programming presents the elements of typical Python and Tkinter applications in a straight-forward fashion. Sample code illustrates each element. Complete applications that go far beyond the fill-the-form class of graphical user interfaces are presented; here you will find examples of complex controls, drawn interfaces and photorealistic panels. The code can readily be used as templates for new applications. Extensions to Python (such as ODBC) are examined as well. Complete source code for all examples, along with the latest releases of required software, will be available from Manning's web site.    Tkinter is fully documented. To date, this level of documentation has not been available to Tkinter programmers, who have been required to read the code or interpret Tcl/Tk man pages to fully understand component usage.    Python and Tkinter Programming will be useful in both Windows and Unix environments, and the example code is portable between the two environments.",
        "status": "PUBLISH",
        "authors": ["John E. Grayson"],
        "categories": ["Python"]
    },
    {
        "title": "Microsoft.NET for Programmers",
        "isbn": "1930110197",
        "pageCount": 386,
        "publishedDate": { "$date": "2002-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grimes.jpg",
        "longDescription": "Written for intermediate and advanced programmers, this book builds on your existing knowledge to teach you exactly what you need to know to develop .NET applications.    Packed full of practical examples, the book presents a case study which takes you through the design of an application \"engine\" and its implementation as a .NET assembly. You'll reuse the engine to create different versions of the application using Windows Forms, Remoting, Web Services, Windows Services, COM, MSMQ, ASP.NET, ADO.NET, and the Mobile Internet Toolkit. You'll also learn about fundamental .NET concepts such as types and assemblies and develop a simple language compiler which can emit a .NET executable.    Also included is an appendix containing a comprehensive introduction to the C# programming language.",
        "status": "PUBLISH",
        "authors": ["Fergal Grimes"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Grails in Action",
        "isbn": "1933988932",
        "pageCount": 520,
        "publishedDate": { "$date": "2009-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith.jpg",
        "shortDescription": "Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards   even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web.",
        "longDescription": "Web apps shouldn't be hard to build, right  The developers of Grails agree. This hyper-productive open-source web framework lets you \"code by convention\", leaving you to focus on what makes your app special. Through its use of Groovy, it gives you a powerful, Java-like language and full access to all Java libraries. And you can adapt your app's behavior at runtime without a server restart.    Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards   even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web. Prior experience with Groovy is not necessary.",
        "status": "PUBLISH",
        "authors": ["Glen Smith", "Peter Ledbrook"],
        "categories": ["Java"]
    },
    {
        "title": "Up to Speed with Swing, Second Edition",
        "isbn": "1884777759",
        "pageCount": 560,
        "publishedDate": { "$date": "1999-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gutz2.jpg",
        "shortDescription": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.",
        "longDescription": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.    Guided by a master programmer who writes Java for a living, you'll learn Swing from the insider's point of view. Up to Speeed with Swing has one purpose: to save you time mastering Swing. From the basics of Swing to creating a custom look and feel, or from the Model View Controller (MVC) architecture to optimizing your Swing code, this tutorial gives you an understanding of the big picture as well as the experience of working through detailed examples.",
        "status": "PUBLISH",
        "authors": ["Steven Gutz"],
        "categories": ["Java"]
    },
    {
        "title": "OSGi in Action",
        "isbn": "1933988916",
        "pageCount": 576,
        "publishedDate": { "$date": "2011-04-06T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hall.jpg",
        "shortDescription": "OSGi in Action is a comprehensive guide to OSGi with two primary goals. First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles. You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.",
        "longDescription": "If you're a Java developer, you've almost certainly heard of OSGi   and also heard that it's becoming quite a big deal. But you may still be wondering exactly \"What is OSGi \"    Simply put, OSGi is a technology that allows you to create highly modular Java applications. It introduces a logical and physical module format, called a bundle, for explicitly structuring your application as a set of interconnected modules. OSGi lets you install, start, stop, update, or uninstall modules at execution time without taking down your entire system. In addition, OSGi defines a local service-oriented approach for creating applications out of loosely coupled components.    With the prevalence of modern component and service-based architectures, OSGi is becoming increasingly important. It meshes well with such approaches and greatly simplifies their creation and management. It's the backbone of Eclipse's plugin system as well as many recent JavaEE containers, such as GlassFish v3, WebSphere v6.1, and WebLogic Event Server. Even the SpringSource Application Platform is built on top of it.    OSGi in Action is a comprehensive guide to OSGi with two primary goals.    First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles.    You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.    With the core concepts well in hand, you'll explore numerous application scenarios and techniques. How much of OSGi do you actually need  How do you embed OSGi inside other containers  What are the best practices for migrating legacy systems to OSGi  How can you embrace and make the most of system dynamism     Expert authors Richard S. Hall, Karl Pauls, and Stuart McCulloch have years of experience both in building OSGi-based systems and in contributing to OSGi implementations such as Apache Felix.",
        "status": "PUBLISH",
        "authors": [
            "Richard S. Hall",
            "Karl Pauls",
            "Stuart McCulloch",
            "",
            "David Savage"
        ],
        "categories": ["Internet"]
    },
    {
        "title": "GWT in Action",
        "isbn": "1933988231",
        "pageCount": 632,
        "publishedDate": { "$date": "2007-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hanson.jpg",
        "longDescription": "The Google Web Toolkit (GWT) is a new technology from Google that automatically translates Java into JavaScript, making Ajax applications easier to code and deploy. GWT in Action is a comprehensive tutorial for Java developers interested in building the next generation of rich, web-based applications. This book was written by Robert Hanson, creator of the popular GWT Widget Library, and Adam Tacy, a major contributor to the GWT Widget Library.    The Web is experiencing a new growth with an emphasis on rich, web-based applications. These applications can be difficult to build because they rely on JavaScript, which lacks the sophisticated object-oriented structures and static typing of Java, they are tricky to debug, and they require you to manage numerous browser inconsistencies.    In May of 2006 Google released the Google Web Toolkit. GWT enables developers to create Ajax applications in Java. With GWT, you can build your applications using a real object-oriented language and take advantage of Java tools like Eclipse that are already available. Instead of trying to bring tool support to Ajax, Google brought Ajax to a place where the tools already existed.    GWT in Action shows you how to take advantage of these exciting new tools. This clearly-written book is packed with hands-on GWT examples. You   ll absorb the GWT philosophy as you build your first working GWT application.    The book begins by exploring the main features of GWT, including    Compiling Java to JavaScript, the magic that really defines GWT  Building client-side components  Convenient JUnit integration and testing  Interacting with JavaScript and existing JavaScript libraries  Internationalization  You   ll also see how GWT compares to other toolkits.    GWT in Action shows you how to set up your development environment, use and create widgets, communicate with the server, and much more. Readers will follow an example running throughout the book and quickly master the basics of GWT: widgets, panels, and event handling. The book covers the full development cycle, from setting up your development environment, to building the application, then deploying it to the web server. The entire core GWT library is discussed, with details and examples on how it can be extended.    You   ll cover:    Testing, debugging, and deploying GWT Applications  Communicating with GWT-RPC  Examining client-side RPC architecture  Alternative RPC tools: HTTPRequest, RequestBuilder, and FormPanel  Achieving interoperability in GWT with JavaScript Object Notation (JSON)  Making your GWT application flexible and supportable  GWT helps you make the most of Ajax in your web applications and GWT in Action helps you get more out of GWT.",
        "status": "PUBLISH",
        "authors": ["Robert Hanson", "Adam Tacy"],
        "categories": ["Internet", "Java"]
    },
    {
        "title": "The Quick Python Book",
        "isbn": "1884777740",
        "pageCount": 444,
        "publishedDate": { "$date": "1999-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg",
        "longDescription": "The Quick Python Book is a clear, concise introduction to Python, one of the most elegant programming languages in existence. The book is aimed at readers who know programming but for whom the Python language is new.  This book is designed so that you can use it to quickly become proficient in Python. However, it provides more than just a beginners tutorial. Even once you've become more experienced, it should continue to be quite valuable to you as an indexed cache of information on the bulk of the Python concepts and constructs of which you will find yourself wanting to refresh or augment your knowledge.    It first covers the core features of Python (syntax, control flow, basic data structures, etc.) and provides the knowledge to write basic but useful scripts. Features in Python common to other languages are covered very concisely, while features unique to Python are explained in detail.    It next discusses Python features which would be useful to anyone using Python in larger applications, including facilities for managing large collections of code, object-oriented programming, advanced string handling, etc.    The last section of the book discusses advanced topics: Windows/COM programming with Python, integrating Python and Java (Python is one of the few languages other than Java which can be compiled into Java bytecode), extending the Python language with C, and an introduction to some of the advanced web site building tools that are available for Python.",
        "status": "PUBLISH",
        "authors": ["Daryl Harms", "Kenneth McDonald"],
        "categories": ["Python"]
    },
    {
        "title": "SharePoint 2010 Site Owner's Manual",
        "isbn": "1933988754",
        "pageCount": 300,
        "publishedDate": { "$date": "2012-02-13T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harryman.jpg",
        "shortDescription": "SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have   Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates   and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.",
        "longDescription": "For every SharePoint 2010 developer who spends the day buried in Visual Studio cranking out code, there are dozens of other SharePoint site owners who want to share information, create content portals, and add features to existing SharePoint sites. If you're one of these SharePoint administrators, this is the book for you. Chock-full of great ideas and scenarios you'll relate to immediately, this book will teach you the amazing things you can do with SharePoint 2010 without writing any code   or calling in the developers.    SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have   Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates   and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.    This book teaches you by putting your hands on working SharePoint examples. You'll see seven common SharePoint-driven sites that lay out the features and approaches you'll need for most typical applications. The examples range from a simple document-sharing portal, to a SharePoint-hosted blog, to a project management site complete with a calendar, discussion forums, and an interactive task list.",
        "status": "PUBLISH",
        "authors": ["Yvonne M. Harryman"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Java Development with Ant",
        "isbn": "1930110588",
        "pageCount": 672,
        "publishedDate": { "$date": "2002-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher.jpg",
        "shortDescription": "The most widely used build tool for Java projects, Ant is cross-platform, extensible, simple, and fast. It scales from small personal projects to large, multi-team J2EE projects. And, most important, it's easy to learn.",
        "longDescription": "Java Development with Ant systematically explores what Ant can do, and how to apply it to your project. Whether you are new to Ant, or an experienced user, this book will show you powerful and creative uses for Ant. The book emphasizes basic concepts you need to know to effectively use Ant starting with Ant's XML-driven build process. It leads you step-by-step through everything you need to know to compile, test, package and deploy an application. It then guides you through the maze of more complex situations common in larger projects such as enterprise Java applications and Web Services. With this book you will gain access to a powerful tool to automatically build, test and deploy your Java software, no matter how simple or complex it might be.",
        "status": "PUBLISH",
        "authors": ["Erik Hatcher", "Steve Loughran"],
        "categories": ["Java", "Internet"]
    },
    {
        "title": "Lucene in Action",
        "isbn": "1932394281",
        "pageCount": 456,
        "publishedDate": { "$date": "2004-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher2.jpg",
        "longDescription": "Lucene is a gem in the open-source world--a highly scalable, fast search engine. It delivers performance and is disarmingly easy to use. Lucene in Action is the authoritative guide to Lucene. It describes how to index your data, including types you definitely need to know such as MS Word, PDF, HTML, and XML. It introduces you to searching, sorting, filtering, and highlighting search results.    Lucene powers search in surprising places--in discussion groups at Fortune 100 companies, in commercial issue trackers, in email search from Microsoft, in the Nutch web search engine (that scales to billions of pages). It is used by diverse companies including Akamai, Overture, Technorati, HotJobs, Epiphany, FedEx, Mayo Clinic, MIT, New Scientist Magazine, and many others.    Adding search to your application can be easy. With many reusable examples and good advice on best practices, Lucene in Action shows you how. And if you would like to search through Lucene in Action over the Web, you can do so using Lucene itself as the search engine--take a look at the authors' awesome Search Inside solution. Its results page resembles Google's and provides a novel yet familiar interface to the entire book and book blog.",
        "status": "PUBLISH",
        "authors": ["Erik Hatcher", "Otis Gospodnetic"],
        "categories": ["Java"]
    },
    {
        "title": "Lucene in Action, Second Edition",
        "isbn": "1933988177",
        "pageCount": 532,
        "publishedDate": { "$date": "2010-07-09T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher3.jpg",
        "shortDescription": "With clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.",
        "longDescription": "When Lucene first hit the scene five years ago, it was nothing short of amazing. By using this open-source, highly scalable, super-fast search engine, developers could integrate search into applications quickly and efficiently. A lot has changed since then   search has grown from a \"nice-to-have\" feature into an indispensable part of most enterprise applications. Lucene now powers search in diverse companies including Akamai, Netflix, LinkedIn, Technorati, HotJobs, Epiphany, FedEx, Mayo Clinic, MIT, New Scientist Magazine, and many others.    Some things remain the same, though. Lucene still delivers high-performance search features in a disarmingly easy-to-use API. It's still a single compact JAR file (less than 1 MB!). Due to its vibrant and diverse open-source community of developers and users, Lucene is relentlessly improving, with evolutions to APIs, significant new features such as payloads, and a huge (as much as 8x) increase in indexing speed with Lucene 3.0.    And with clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.",
        "status": "PUBLISH",
        "authors": ["Erik Hatcher", "Otis Gospodnetic", "", "Michael McCandless"],
        "categories": ["Java", "Open Source"]
    },
    {
        "title": "PowerBuilder 6.0 Questions & Answers",
        "isbn": "1884777708",
        "pageCount": 446,
        "publishedDate": { "$date": "1998-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
        "shortDescription": "If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
        "longDescription": "Demand for PowerBuilder programmers, with the potential they offer for rapid application development, continues to soar. If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
        "status": "PUBLISH",
        "authors": ["Tim Hatton"],
        "categories": ["PowerBuilder"]
    },
    {
        "title": "The Awesome Power of PowerJ",
        "isbn": "1884777538",
        "pageCount": 378,
        "publishedDate": { "$date": "1998-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton2.jpg",
        "shortDescription": "The Awesome Power of PowerJ shows you how you can write Java programs the very first day with PowerJ, even if you don't know Java. Through a hands-on approach that makes liberal use of figures and code snippets, you will learn how to use PowerJ to build effective Java applets and applications.",
        "longDescription": "PowerJ is the bridge between the rapid application development world of PowerBuilder and the multiplatform world of Java. The Awesome Power of PowerJ shows you how you can write Java programs the very first day with PowerJ, even if you don't know Java. Through a hands-on approach that makes liberal use of figures and code snippets, you will learn how to use PowerJ to build effective Java applets and applications.",
        "status": "PUBLISH",
        "authors": ["Tim Hatton"],
        "categories": ["Java"]
    },
    {
        "title": "The Awesome Power of Power++",
        "isbn": "1884777546",
        "pageCount": 416,
        "publishedDate": { "$date": "1998-06-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton3.jpg",
        "shortDescription": "The Awesome Power of Power++ is for the beginning to intermediate Power++ programmer. It assumes that you have little or no knowledge of the C++ language but that you do know programming constructs. The purpose is to teach you how to use Power++ to build C++ applets and applications even if you are not a C++ expert. To this end it takes a hands-on approach and makes liberal use of figures and code snippets.",
        "longDescription": "The Awesome Power of Power++ is for the beginning to intermediate Power++ programmer. It assumes that you have little or no knowledge of the C++ language but that you do know programming constructs. The purpose is to teach you how to use Power++ to build C++ applets and applications even if you are not a C++ expert. To this end it takes a hands-on approach and makes liberal use of figures and code snippets.    The Awesome Power of Power++ is for:    * IS Managers who are investigating C++ and C++ environments  * Developers who are wanting to learn C++ and build C++ programs  * Any developer who has a C++ project that must be finished quickly ",
        "status": "PUBLISH",
        "authors": ["Tim Hatton"],
        "categories": ["PowerBuilder"]
    },
    {
        "title": "Azure in Action",
        "isbn": "193518248X",
        "pageCount": 425,
        "publishedDate": { "$date": "2010-10-22T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hay.jpg",
        "shortDescription": "Azure in Action is a fast-paced tutorial intended for architects and developers looking to develop on Windows Azure and the Windows Azure Platform. It's designed both for readers new to cloud concepts and for those familiar with cloud development but new to Azure. After a quick walk through the basics, it guides you all the way from your first app through more advanced concepts of the Windows Azure Platform.",
        "longDescription": "Cloud-based applications pose an intriguing value proposition for businesses. With an easily scalable, pay-as-you-go model and very small startup costs, the cloud can be a great alternative to systems hosted in-house. Developers are scrambling to understand the impact a cloud-based approach will have on current and future projects.    Azure is Microsoft's full-fledged entry into the \"Cloud Services Platform\" arena. Unlike other cloud offerings that address only one piece of the puzzle, Azure includes an operating system, a set of developer services, and a data model that can be used individually or together. It's designed to interact seamlessly with other .NET-based components, and leverages your knowledge of Visual Studio, the .NET platform, and SQL Server. It's also fully compatible with multiple internet protocols, including HTTP, REST, SOAP, and XML.    Azure in Action is a fast-paced tutorial intended for architects and developers looking to develop on Windows Azure and the Windows Azure Platform. It's designed both for readers new to cloud concepts and for those familiar with cloud development but new to Azure. After a quick walk through the basics, it guides you all the way from your first app through more advanced concepts of the Windows Azure Platform.    The book starts by looking at the logical and physical architecture of an Azure app, and then moves to the core storage services   binary store, tables and queues. Then, it explores designing and scaling frontend and backend services that run in the cloud. Next, it covers more advanced scenarios in Windows Azure. After covering the core of Azure, it introduces the rest of the Windows Azure Platform with a particular focus on SQL Azure Database.",
        "status": "PUBLISH",
        "authors": ["Chris Hay", "Brian H. Prince"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Distributed Agile in Action",
        "isbn": "1935182412",
        "pageCount": 325,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazrati.jpg",
        "shortDescription": "Distributed Agile in Action is the first book to directly address the unique task of going Agile in a distributed team. Rather than rehashing Agile theories, this book supplies the practical examples and step by step advice you need to help your distributed teams adopt and embrace Agile principles. It's a distilled and carefully organized learning aid for working in a distributed Agile environment, with in-depth focus on how to approach three critical components of development-People, Process and Technology.",
        "longDescription": "As organizations try to do more with less, development teams are less likely to be centrally located, tightly-managed, and permanent. Distributed organizations face special challenges when implementing Agile processes, which rely on frequent communication and responsive teams. Distributed Agile in Action is a guide to running successful Agile projects within geographically and culturally diverse organizations.    Distributed Agile in Action is the first book to directly address the unique task of going Agile in a distributed team. Rather than rehashing Agile theories, this book supplies the practical examples and step by step advice you need to help your distributed teams adopt and embrace Agile principles. It's a distilled and carefully organized learning aid for working in a distributed Agile environment, with in-depth focus on how to approach three critical components of development-People, Process and Technology.    It's jam-packed with suggestions and stories gained from the authors' distributed Agile journey working with teams spread across cultures, continents, and time zones. The book includes a complete case study presenting an increasingly-common project scenario.    This book is written for developers and project managers in distributed teams. Although the examples and case study are presented in Java / Java EE, best practices from rest of the book are technology agnostic and would work equally well for any environment.",
        "status": "MEAP",
        "authors": ["Vikas Hazrati", "Balaji D Loganathan"],
        "categories": ["Software Engineering"]
    },
    {
        "title": "Metaprogramming in .NET",
        "isbn": "1617290262",
        "pageCount": 0,
        "publishedDate": { "$date": "2012-12-31T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazzard.jpg",
        "status": "PUBLISH",
        "authors": ["Kevin Hazzard", "Jason Bock"],
        "categories": ["Microsoft/.NET"]
    },
    {
        "title": "Portlets and Apache Portals",
        "pageCount": 500,
        "publishedDate": { "$date": "2005-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hepper.jpg",
        "shortDescription": "Portlets and Apache Portals was not published by Manning, but the manuscript is available for download from our website \"as is.\"",
        "longDescription": "Due to the growing complexity of web sites, portals and portlets are experiencing serious growth. Portals help reduce complexity by allowing the dynamic aggregation and display of diverse content in a single web page. Portal components are pluggable parts called portlets. To be \"pluggable\" portlets and portals must satisfy standards. The authors of this book, all but one employees of IBM, created these standards: Java Portlet Specification JSR 168 and Web Services for Remote Portlets (WSRP).    The book starts gently with the basics of portlet technology and a functionrich portlet example. It then dives more deeply into portlets and J2EE, portlet architecture, best practices, and explores how the popular JSF web framework can ease portlet development. It shows how to set up an open source portal and create portlets that dynamically access backend data of various types. It is rich in something readers want: code examples that show them how to do it.",
        "status": "PUBLISH",
        "authors": [
            "Stefan Hepper",
            "Peter Fischer",
            "Stephan Hesmer",
            "Richard Jacob",
            "David Sean Taylor"
        ],
        "categories": ["Java"]
    },
    {
        "title": "Code Generation in Action",
        "isbn": "1930110979",
        "pageCount": 350,
        "publishedDate": { "$date": "2003-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
        "shortDescription": "Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.",
        "longDescription": "Code Generation In Action covers technique and implementation for building high-quality machine-generated code for today's complex applications frameworks. The book includes step-by-step instruction for building dozens of code generators of varying types. These generators build high-quality output that is consistent and maintainable. Code generation abstracts the design of the code so that multiple outputs can be created from a single model of the application functionality, which means development teams can focus on higher-level design work and strategic problems, while still meeting goals for maintaining production applications.. The book covers techniques that range from simple code processors that handle common coding problems to more elaborate and complex generators that maintain entire application tiers.  Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.    Although code generation is an engineering technique it also has a large impact on the engineering team and management. The book discusses the non-technical justifications for code generation in depth, and offers practical advice for making code generation succeed in any organization.",
        "status": "PUBLISH",
        "authors": ["Jack Herrington"],
        "categories": ["Programming"]
    },
    {
        "title": "Illustrated Guide to HTTP",
        "isbn": "138582262",
        "pageCount": 400,
        "publishedDate": { "$date": "1997-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hethmon.jpg",
        "longDescription": "If you're interested in building a web server -- or if you're developing an application that depends or will depend on current HTTP protocols -- Illustrated Guide to HTTP is for you! It covers the latest HTTP/1.1 protocol standard as found in RFC 2068 and RFC 2069. Any programmer, developer or web manager involved in web-related software needs this book to keep up with this dynamic area.",
        "status": "PUBLISH",
        "authors": ["Paul S. Hethmon"],
        "categories": ["Internet"]
    },
    {
        "title": "Agile ALM",
        "isbn": "1935182633",
        "pageCount": 0,
        "publishedDate": { "$date": "2011-08-20T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/huettermann.jpg",
        "shortDescription": "Many software projects fail unnecessarily because of unclear objectives, redundant and unproductive work, cost overruns, and a host of other avoidable process problems. In response, agile processes and lightweight tooling have begun to replace traditional engineering processes throughout the development lifecycle. An agile approach to application lifecycle management improves product quality, reduces time to market, and makes for happier developers.    Agile ALM is a guide for Java developers who want to integrate flexible agile practices and lightweight tooling along all phases of the software development process. The book introduces a new vision for managing change in requirements and process more efficiently and flexibly. You'll learn powerful practices like task-based Development, where you align activities into tasks resulting in traceable artifacts, Continuous Integration, in which you frequently and systematically integrate, build, and test an application in development and using Scrum as an agile approach to release management. The effect is a more comprehensive and practical approach to build, configuration, deployment, release, test, quality, integration, and requirements management.    This book synthesizes technical and functional elements to provide a comprehensive approach to software development. You'll learn to see the whole scope of the development process as a set of defined tasks, many of which are repeated daily, and then master the tools and practices you need to accomplish each of those tasks efficiently.    Because efficient tool chains can radically improve the speed and fluidity of the development process, this book demonstrates how to integrate state-of-the-art lightweight tools. Many of the tools and examples are Java-based, but the Agile ALM principles apply to all development platforms. As well, the many examples show how you can bridge different languages and systems.",
        "longDescription": "Many software projects fail unnecessarily because of unclear objectives, redundant and unproductive work, cost overruns, and a host of other avoidable process problems. In response, agile processes and lightweight tooling have begun to replace traditional engineering processes throughout the development lifecycle. An agile approach to application lifecycle management improves product quality, reduces time to market, and makes for happier developers.    Agile ALM is a guide for Java developers who want to integrate flexible agile practices and lightweight tooling along all phases of the software development process. The book introduces a new vision for managing change in requirements and process more efficiently and flexibly. You'll learn powerful practices like task-based Development, where you align activities into tasks resulting in traceable artifacts, Continuous Integration, in which you frequently and systematically integrate, build, and test an application in development and using Scrum as an agile approach to release management. The effect is a more comprehensive and practical approach to build, configuration, deployment, release, test, quality, integration, and requirements management.    This book synthesizes technical and functional elements to provide a comprehensive approach to software development. You'll learn to see the whole scope of the development process as a set of defined tasks, many of which are repeated daily, and then master the tools and practices you need to accomplish each of those tasks efficiently.    Because efficient tool chains can radically improve the speed and fluidity of the development process, this book demonstrates how to integrate state-of-the-art lightweight tools. Many of the tools and examples are Java-based, but the Agile ALM principles apply to all development platforms. As well, the many examples show how you can bridge different languages and systems.",
        "status": "PUBLISH",
        "authors": ["Michael Hüttermann"],
        "categories": ["Software Engineering"]
    },
    {
        "title": "Java Network Programming, Second Edition",
        "isbn": "188477749X",
        "pageCount": 860,
        "publishedDate": { "$date": "1999-05-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hughes.jpg",
        "longDescription": "The first edition of Java Network Programming was acclaimed by readers as an outstanding networking reference. It provided complete details of the Java platform's support for networking and I/O with extensive API coverage and sophisticated examples.    This second edition is strengthened with complete coverage of JDK 1.2 and many more practical examples. Unlike other books in the field, Java Network Programming, 2nd Edition goes well beyond simple examples to show how to develop robust, efficient real-world applications.    What's inside:        * Introduction to networking and Internet protocols      * Complete coverage of the Java networking and I/O APIs      * Details of multithreading and exception handling      * Byte, Character, Object and Message streams      * IP, TCP, UDP, Multicast, HTTP, DNS, RMI, CORBA and Servlets      * Finger, DNS, HTTP, and ping clients and servers      * Multiprotocol chat systems & whiteboards ",
        "status": "PUBLISH",
        "authors": ["Merlin Hughes", "Michael Shoffner", "", "Derek Hamner"],
        "categories": ["Java"]
    },
    {
        "title": "Struts in Action",
        "isbn": "1932394249",
        "pageCount": 672,
        "publishedDate": { "$date": "2002-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/husted.jpg",
        "longDescription": "Struts solves the most common problems of web development. By basing your application on the Struts framework, you can reuse proven solutions and focus on what's unique to your own case. Struts is an open-source product distributed by the Apache Software Foundation. Struts in Action is a comprehensive introduction to the Struts framework. It covers initial design, data validation, database access, dynamic page assembly, localization, product configuration, and other important areas. It shows you how to use both JSP tags and Velocity templates. It carefully explains the Struts architecture and control flow, as well as how to extend framework classes.    Differences between Struts 1.1 and Struts 1.0. are pointed out and a case-study illustrates the 1.0 to 1.1 transition. The book shows you dozens of proven design techniques, patterns, and strategies, many of them not found elsewhere.",
        "status": "PUBLISH",
        "authors": [
            "Ted N. Husted",
            "Cedric Dumoulin",
            "George Franciscus",
            "David Winterfeldt"
        ],
        "categories": ["Java", "Internet"]
    },
    {
        "title": "Camel in Action",
        "isbn": "1935182366",
        "pageCount": 375,
        "publishedDate": { "$date": "2011-01-04T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
        "shortDescription": "Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns. Written by the people who wrote the Camel code, it's up to date and distills details and insights that only people deeply involved with Camel could provide.",
        "longDescription": "Apache Camel is a Java-based toolkit that makes it easy to implement services based on standard enterprise integration patterns (EIP). Through a concise, but sophisticated domain specific language (DSL), you can build integration logic in lego style. The Camel DSL is implemented in a range of standard programming languages such as Java, XML, Scala, Groovy, Ruby, and Python.    Camel provides components for using these patterns via commonly used transports such as JMS, HTTP, REST, File/FTP, JPA, SMTP, and more than 50 others. No transport  Camel provides a flexible pluggable architecture to build your own components. Or you can let Camel adapt to your existing libraries without the need to change anything.    Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns. Written by the people who wrote the Camel code, it's up to date and distills details and insights that only people deeply involved with Camel could provide.    Camel is designed to run in any existing environment without imposing restrictions. This allows you to get started with Camel very easily and reuse existing infrastructure and platforms. Camel can run in many forms such as standalone, web or Spring application, JBI, OSGi, Java EE, in the cloud, and so on. The book includes a technical reference explaining how to use Camel with many platforms.",
        "status": "PUBLISH",
        "authors": ["Claus Ibsen", "Jonathan Anstey"],
        "categories": ["Java"]
    },
    {
        "title": "Taming Text",
        "isbn": "193398838X",
        "pageCount": 350,
        "publishedDate": { "$date": "2012-12-31T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
        "shortDescription": "Taming Text is a hands-on, example-driven guide to working with unstructured text in the context of real-world applications. This book explores how to automatically organize text using approaches such as full-text search, proper name recognition, clustering, tagging, information extraction, and summarization. The book guides you through examples illustrating each of these topics, as well as the foundations upon which they are built.",
        "longDescription": "It is no secret that the world is drowning in text and data. This causes real problems for everyday users who need to make sense of all the information available, and software engineers who want to make their text-based applications more useful and user-friendly. Whether you're building a search engine for a corporate website, automatically organizing email, or extracting important nuggets of information from the news, dealing with unstructured text can be a daunting task.    Taming Text is a hands-on, example-driven guide to working with unstructured text in the context of real-world applications. This book explores how to automatically organize text using approaches such as full-text search, proper name recognition, clustering, tagging, information extraction, and summarization. The book guides you through examples illustrating each of these topics, as well as the foundations upon which they are bulit.",
        "status": "PUBLISH",
        "authors": [
            "Grant S. Ingersoll",
            "Thomas S. Morton",
            "",
            "Andrew L. Farris"
        ],
        "categories": ["Software Engineering"]
    },
    {
        "title": "JBoss in Action",
        "isbn": "1933988029",
        "pageCount": 496,
        "publishedDate": { "$date": "2009-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jamae.jpg",
        "longDescription": "The JBoss 5 Application Server is a Java Enterprise Edition 5 application server that provides services that most enterprise applications need, such as security, transactionality, persistence, monitoring, resource management, and remote access. JBoss 5 Application Server is compliant with the specification defined by the Java Community Process.    JBoss in Action teaches readers how to use the JBoss application server, digging into the things that separate JBoss from other Java EE servers. This book goes deeply into the advanced features and configuration of the server. In particular, it focuses on enterprise-class topics, such as high availability, security, and performance.    The book walks you through the JBoss 5 Application Server, from installation and configuration to production deployment. It guides you through configuring the server   s component containers, such as the JBoss Web Server, the EJB3 server, and JBoss Messaging. It also gives you detailed insight into configuring the services, such as security, performance, and clustering. Beyond coverage of the core application server, the book also teaches you how to use some of the    hot    technologies that run on top of the application server, such as JBoss Seam and JBoss Portal.    The authors, both seasoned professional experts at developing and administering JBoss, provide meaningful explanations and background on many topics, all tied together with practical, real-world advice from their collective experience. The uniquely comprehensive explanations and the overall wide coverage provided in this book surpass any other content currently available.    This book is perfect for developers writing Java EE applications, as well as administrators responsible for maintaining the JBoss Application Server.",
        "status": "PUBLISH",
        "authors": ["Javid Jamae", "Peter Johnson"],
        "categories": ["Java"]
    },
    {
        "title": "Gnuplot in Action",
        "isbn": "1933988398",
        "pageCount": 400,
        "publishedDate": { "$date": "2009-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/janert.jpg",
        "longDescription": "Statistical data is only as valuable as your ability to analyze, interpret, and present it in a meaningful way. Gnuplot is the most widely used program to plot and visualize data for Unix/Linux systems and it is also popular for Windows and the Mac. It's open-source (as in free!), actively maintained, stable, and mature. It can deal with arbitrarily large data sets and is capable of producing high-quality, publication-ready graphics.    So far, the only comprehensive documentation available about gnuplot is the online reference documentation, which makes it both hard to get started and almost impossible to get a complete overview over all of its features. If you've never tried gnuplot   or have found it tough to get your arms around   read on.    Gnuplot in Action is the first comprehensive introduction to gnuplot   from the basics to the power features and beyond. Besides providing a tutorial on gnuplot itself, it demonstrates how to apply and use gnuplot to extract intelligence from data. Particular attention is paid to tricky or poorly-explained areas. You will learn how to apply gnuplot to actual data analysis problems. This book looks at different types of graphs that can be generated with gnuplot and will discuss when and how to use them to extract actual information from data.    One of gnuplot's main advantages is that it requires no programming skills nor knowledge of advanced mathematical or statistical concepts. Gnuplot in Action assumes you have no previous knowledge of either gnuplot or statistics and data analysis. The books starts out with basic gnuplot concepts, then describes in depth how to get a graph ready for final presentation and to make it look \"just right\" by including arrows, labels, and other decorations.    Next the book looks at advanced concepts, such as multi-dimensional graphs and false-color plots   powerful features for special purposes. The author also describes advanced applications of gnuplot, such as how to script gnuplot so that it can run unattended as a batch job, and how to call gnuplot from within a CGI script to generate graphics for dynamic websites on demand.    Gnuplot in Action makes gnuplot easy for anyone who needs to do data analysis, but doesn't have an education in analytical tools and methods. It's perfect for DBAs, programmers, and performance engineers; business analysts and MBAs; and Six-Sigma Black Belts and process engineers.",
        "status": "PUBLISH",
        "authors": ["Philipp K. Janert"],
        "categories": ["Computer Graphics"]
    },
    {
        "title": "Extending and Embedding Perl",
        "isbn": "1930110820",
        "pageCount": 384,
        "publishedDate": { "$date": "2002-08-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jenness.jpg",
        "longDescription": "Extending and Embedding Perl explains how to expand the functionality and usefulness of the Perl programming language and how to use Perl from C programs. It begins simply but also covers complex issues using real code examples from the Perl source. The book discusses how to write interfaces to C libraries (as well as C++ and Fortran libraries). It shows you how to implement Perl callbacks for C libraries, how to pass Perl hashes and arrays between Perl and C, and how to use the Perl Data Language infrastructure to improve the speed of array operations.    Additionally, the book peers under the hood to see how the Perl programming language really works by looking at the interpreter. The make-up of Perl variables is discussed along with details on how a Perl program is parsed and converted to executable code.",
        "status": "PUBLISH",
        "authors": ["Tim Jenness", "Simon Cozens"],
        "categories": ["Perl"]
    },
    {
        "title": "iOS 4 in Action",
        "isbn": "1617290017",
        "pageCount": 504,
        "publishedDate": { "$date": "2011-06-09T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
        "shortDescription": "iOS 4 in Action, written for Xcode 4, is a detailed, hands-on guide that goes from setting up your development environment, through your first coding steps, all the way to creating a polished, commercial iOS 4 application. You'll run through examples from a variety of areas including a chat client, a video game, an interactive map, and background audio. You'll also learn how the new iOS 4 features apply to your existing iOS 3 based apps. This book will help you become a confident, well-rounded iOS 4 developer.",
        "longDescription": "Written for Xcode 4, iOS 4 in Action guides you from setting up your development environment, through coding your first app, all the way to selling in the App Store. Work through sample applications including a chat client, a video game, an interactive map, background audio, and more as you explore the iOS 4 SDK.    Version 4 of the iOS SDK adds powerful new features like multitasking, GCD, blocks, and iAds. With the release of Xcode 4, it's easier than ever to get programming, even if you're new to Objective-C.    iOS 4 in Action, written for Xcode 4, is a detailed, hands-on guide that goes from setting up your development environment, through your first coding steps, all the way to creating a polished, commercial iOS 4 application. You'll run through examples from a variety of areas including a chat client, a video game, an interactive map, and background audio. You'll also learn how the new iOS 4 features apply to your existing iOS 3 based apps. This book will help you become a confident, well-rounded iOS 4 developer.",
        "status": "PUBLISH",
        "authors": [
            "Jocelyn Harrington",
            "Brandon Trebitowski",
            "Christopher Allen",
            "",
            "Shannon Appelcline"
        ],
        "categories": ["Mobile Technology"]
    },
    {
        "title": "Elements of Programming with Perl",
        "isbn": "1884777805",
        "pageCount": 368,
        "publishedDate": { "$date": "1999-10-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/johnson.jpg",
        "longDescription": "As the complexity of web sites grows, more and more webmasters need to acquire programming skills. Naturally, such persons are inclined to learn Perl, the \"language of the web.\" However, there has been no book to treat Perl as the first programming language; every Perl book assumes that the reader can program already.    Until now.    Elements of Programming with Perl is a general introduction to programming, using Perl as the implementation language. It starts at the beginning, teaching programming style, structure, and design. It covers all the fundamental elements of Perl (e.g., pattern matching and text processing) and proceeds to advanced concepts, including modular programming, abstract data structures, and object oriented programming.    Elements of Programming with Perl contains numerous examples and diagrams that illustrate concepts, algorithms and techniques. Complete example programs show the new programmer how to tie concepts together to solve real-world problems.    Elements of Programming with Perl is designed for the new programmer who needs to know Perl, and for the regular Perl user who would like to improve his or her programming skills.",
        "status": "PUBLISH",
        "authors": ["Andrew L. Johnson"],
        "categories": ["Perl"]
    },
    {
        "title": "Learn Windows PowerShell in a Month of Lunches",
        "isbn": "1617290211",
        "pageCount": 0,
        "publishedDate": { "$date": "2011-04-15T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones.jpg",
        "shortDescription": "Learn Windows PowerShell in a Month of Lunches is an innovative tutorial designed for busy administrators. Author Don Jones has taught thousands of administrators to use PowerShell, and now he'll teach you, bringing his years of training techniques to a concise, easy-to-follow book. Just set aside one hour a day   lunchtime would be perfect   for an entire month, and you'll be automating administrative tasks faster than you ever thought possible. Don combines his own in-the-trenches experience with years of PowerShell instruction to deliver the most important, effective, and engaging elements of PowerShell to you quickly and painlessly, setting you on the path to a career-boosting future.",
        "longDescription": "In Windows, there's a control panel, dialog box, administrative console, API, or wizard to manage every component of your system. There are    thousands    of them   so many that it can be nearly impossible to keep track of all the locations and settings you need to administer Windows effectively. For administrators, PowerShell is a godsend because it provides a single, unified command line from which you can control and automate every aspect of Windows. PowerShell finally enables Windows administrators to work in a way that Unix and Linux administrators have leveraged for decades.    Like classic administrative shells, PowerShell accepts and immediately executes typed commands. In addition, it has all the features of a full-fledged programming language built in, so you can create scripts to automate even the most complex tasks. And it's fully aware of all the components of Windows and most Windows servers, so you can use PowerShell to control Exchange, IIS, SharePoint, and other core pieces of your Windows system.    Learn Windows PowerShell in a Month of Lunches is an innovative tutorial designed for busy administrators. Author Don Jones has taught thousands of administrators to use PowerShell, and now he'll teach you, bringing his years of training techniques to a concise, easy-to-follow book. Just set aside one hour a day   lunchtime would be perfect   for an entire month, and you'll be automating administrative tasks faster than you ever thought possible. Don combines his own in-the-trenches experience with years of PowerShell instruction to deliver the most important, effective, and engaging elements of PowerShell to you quickly and painlessly, setting you on the path to a career-boosting future.",
        "status": "PUBLISH",
        "authors": ["Don Jones"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "R in Action",
        "isbn": "1935182390",
        "pageCount": 375,
        "publishedDate": { "$date": "2011-08-15T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
        "shortDescription": "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. As you work through various examples illustrating R's features, you'll also get a crash course in practical statistics, including basic and advanced models for normal and non-normal data, longitudinal and survival data, and a wide variety of multivariate methods. Both data mining methodologies and approaches to messy and incomplete data are included.",
        "longDescription": "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy. R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information. It consists of the interpreted R language plus a run-time environment with graphics, a debugger, and the ability to run programs stored in script files. It compiles and runs on UNIX, Windows and Mac OS X, and has been extended with hundreds of add-on packages.    R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. As you work through various examples illustrating R's features, you'll also get a crash course in practical statistics, including basic and advanced models for normal and non-normal data, longitudinal and survival data, and a wide variety of multivariate methods. Both data mining methodologies and approaches to messy and incomplete data are included.    And data analysis is only half the story. You'll also master R's extensive graphical environment for presenting data. Along the way, the book presents many of R's most useful add-on modules. You'll also learn how to interface R with other software platforms and data management systems for maximum utility.",
        "status": "PUBLISH",
        "authors": ["Robert I. Kabacoff"],
        "categories": ["Software Engineering"]
    },
    {
        "title": "Android in Practice",
        "isbn": "9781935182924",
        "pageCount": 0,
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kaeppler.jpg",
        "status": "MEAP",
        "authors": ["Matthias Kaeppler", "Michael D. Galpin", "Charlie Collins"],
        "categories": ["Mobile Technology"]
    },
    {
        "title": "SOA Security",
        "isbn": "1932394680",
        "pageCount": 512,
        "publishedDate": { "$date": "2007-12-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kanneganti.jpg",
        "longDescription": "Anyone seeking to implement SOA Security is forced to dig through a maze of inter-dependent specifications and API docs that assume a lot of prior security knowledge on the part of readers. Getting started on a project is proving to be a huge challenge to practitioners. This book seeks to change that. It provides a bottom-up understanding of security techniques appropriate for use in SOA without assuming any prior familiarity with security topics.    Unlike most other books about SOA that merely describe the standards, this book helps readers learn through action, by walking them through sample code that illustrates how real life problems can be solved using the techniques and best practices described in the standards. It simplifies things: where standards usually discuss many possible variations of each security technique, this book focuses on the 20% of variations that are used 80% of the time. This keeps the material covered useful for all readers except the most advanced.",
        "status": "PUBLISH",
        "authors": ["Ramarao Kanneganti", "Prasad A. Chodavarapu"],
        "categories": ["Software Engineering"]
    },
    {
        "title": "Rails 3 in Action",
        "isbn": "1935182277",
        "pageCount": 425,
        "publishedDate": { "$date": "2011-09-20T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/katz.jpg",
        "shortDescription": "Rails 3 in Action will provide a thorough introduction to Ruby-based web development using Rails. Like Rails 3 itself, this book combines Merb and Rails in the form of authors Yehuda Katz, Merb Lead Developer.",
        "longDescription": "In December 2008, the Merb team announced that they will be collaborating with the Rails core team on the next versions of Merb and Rails. Rather than maintaining parallel tracks, Merb 2 and Rails 3 will merge, preserving the flexible configuration and advanced features that Merb users love along with the rapid productivity and ease-of-use that makes Rails shine. As Engine Yard developer (and Manning author) Yehuda Katz puts it, \"Effectively, Merb 2 is Rails 3.\"    Rails 3 in Action will provide a thorough introduction to Ruby-based web development using Rails. Like Rails 3 itself, this book combines Merb and Rails in the form of authors Yehuda Katz, Merb Lead Developer.    As a developer, you'll benefit from several big advantages to this change:  Rails becomes more modular, by building on rails core with the ability to opt in or out of specific components and making it possible to replace parts of Rails without disturbing other parts.  Merb performance improvements flow into Rails, including benchmarking applications so developers can see which optimizations have real-world impact.  A defined public API with a test suite, so users and plugin developers have a stable API to build against.  A \"core\" version of Rails, like Merb's current core generator, that makes it easy to select just the parts that are important for your app.  DataMapper and Sequel support as first-class ORMs, along with ActiveRecord as the default.  Rack support in Rails 3, to improve the state of modular, sharable logic between applications.  The Rails 3 team is moving full steam ahead building the new version. The Merb team will start working on Rails immediately, and also continue to fix bugs and resolve other major issues in the current release of Merb. Interim versions of Merb will help ease the transition to Rails 3. In particular, Merb releases with deprecation notices and other transitional mechanisms will assist developers in tracking down the changes between Merb 1.x and Rails 3.    If you've already learned Merb, Rails 3 in Action will help you parlay that knowledge into the new Rails code base. If you're a long time Rails developer, it will help you get up to speed with all the new Rails 3 features and changes.",
        "status": "PUBLISH",
        "authors": ["Ryan Bigg", "Yehuda Katz"],
        "categories": ["Internet"]
    },
    {
        "title": "Continuous Integration in .NET",
        "isbn": "1935182552",
        "pageCount": 328,
        "publishedDate": { "$date": "2011-03-14T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kawalerowicz.jpg",
        "shortDescription": "Continuous Integration in .NET is a tutorial for developers and team leads that teaches you to reimagine your development strategy by creating a consistent continuous integration process. This book shows you how to build on the tools you already know--.NET Framework and Visual Studio and to use powerful software like MSBuild, Subversion, TFS 2010, Team City, CruiseControl.NET, NUnit, and Selenium.",
        "longDescription": "There are three copies of a source file and no-one knows which is the right one. Your carefully-crafted unit tests won't run anymore. The three-year-old requirements doc is totally irrelevant. The boss wants to ship, ship, ship. The team in Austin has no idea what the team in Arlington is up to. You are in integration hell. Ready to try something different     Continuous integration is a software engineering process designed to minimize \"integration hell.\" It's a coordinated development approach that blends the best practices in software delivery: frequent integration, constant readiness, short build feedback cycles, persistent testing, and a flexible approach to developing--and modifying--system requirements. For .NET developers, especially, adopting these new approaches and the tools that support can require rethinking your dev process altogether.    Continuous Integration in .NET is a tutorial for developers and team leads that teaches you to reimagine your development strategy by creating a consistent continuous integration process. This book shows you how to build on the tools you already know--.NET Framework and Visual Studio and to use powerful software like MSBuild, Subversion, TFS 2010, Team City, CruiseControl.NET, NUnit, and Selenium.    Because CI is as much about the culture of your shop as the tooling, this book will help you bridge resistance to adoption by providing clear guidelines for starting and maintaining projects-along with defined metrics for measuring project success. Each author brings a unique set of experiences and practices to create a rich and varied picture of this powerful technique.    WHAT'S INSIDE        * Continuous integration-what is it       * Source control with Subversion and TFS Version Control.      * Continuous integration server with TFS 2010, CruiseControl.NET and TeamCity.      * Automating build with MSBuild.      * Testing with NUnit, Fitnesse and Selenium.      * Database Integration.      * Keeping code tidy with FxCop and StyleCop.      * Generating documentation with Sandcastle.      * Deploying with ClickOnce and WiX.      * Scaling continuous integration.",
        "status": "PUBLISH",
        "authors": ["Marcin Kawalerowicz", "Craig Berntson"],
        "categories": ["Microsoft .NET"]
    },
    {
        "title": "Technology Paradise Lost",
        "isbn": "1932394133",
        "pageCount": 260,
        "publishedDate": { "$date": "2004-03-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/keller.jpg",
        "shortDescription": "In Technology Paradise Lost Keller describes how the new thinking is working inside some of the country's most complex and successful organizations, including Merrill Lynch, JetBlue, Harrah's, and Motorola which have cut IT spending to gain a competitive edge, and experienced marked gains to their bottom lines.",
        "longDescription": "An engine of the world economy, the computer industry is sputtering. What happened  Will it regain its power and again drive economic growth as in the past     No.    That's the surprising conclusion reached by Erik Keller, a central player in the booming IT world of the 1990s. Driven by fear of being left behind, American corporations let IT grow until it reached one half of all corporate capital spending by the year 2000. Now, chastened by their spending failures, IT managers are converging on a new consensus: to exploit IT competitively they must use their smarts over big money.    This shift in thinking comes just as free, open-source software, low-cost international programming labor, and new technologies combine to make the new approach possible.    A former Research Fellow at Gartner, Keller had an insider's view of the irrational spending at many Fortune 500 companies, personally influencing billions of dollars of technology acquisitions.    In Technology Paradise Lost Keller describes how the new thinking is working inside some of the country's most complex and successful organizations, including Merrill Lynch, JetBlue, Harrah's, and Motorola which have cut IT spending to gain a competitive edge, and experienced marked gains to their bottom lines.    As it advances, the new IT think will cause further massive disruptions in the computer business, with fundamental changes in the ways software is developed, sold, and used. Efficiency of IT investment will grow as excess fat is squeezed out of IT salaries, software system costs, and consultants' fees.    In an unexpected twist, Keller argues that even as IT spending is reduced its importance for competitiveness will grow. Reduced spending does not mean IT has become a commodity. Counterintuitively, companies that spend less in order to get more from information technology will likely be the big winners.",
        "status": "PUBLISH",
        "authors": ["Erik Keller"],
        "categories": ["Business"]
    },
    {
        "title": "Kermit 95+",
        "isbn": "1930110057",
        "pageCount": 0,
        "publishedDate": { "$date": "2003-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kermit.jpg",
        "longDescription": "Kermit 95+, Version 2.1 is a full-featured, fully native, 32-bit communications software package for Microsoft Windows 95/98/NT/2000/XP and IBM OS/2 3.0 and later from the Kermit Project at Columbia University. It works uniformly over a variety of connection methods. Included in the Kermit 95+, Version 2.1 bundle: Internet and modem communications, 40+ terminal emulations, Telnet, SSH, Kerberos, SSL/TLS, Unicode. Plus FTP, Kermit, and Zmodem file transfer, a built-in cross-platform scripting language to automate any communications or file management task, and companion Kermit software for Unix and VMS.    For those already familiar with the package, Version 2.1 adds in-the-box exportable secure authentication and strong encryption including SSH v1/v2, a secure scriptable FTP client, and runs in a GUI window with regular Windows font and size selections.",
        "status": "PUBLISH",
        "authors": ["Kermit Project at Columbia University"],
        "categories": ["Internet", "Networking", "Miscella"]
    },
    {
        "title": "Laszlo in Action",
        "isbn": "1932394834",
        "pageCount": 552,
        "publishedDate": { "$date": "2008-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/klein.jpg",
        "longDescription": "Laszlo in Action is the first comprehensive guide to the Laszlo system and its language LZX. OpenLaszlo is an increasingly popular open-source platform for the development and delivery of rich internet applications across multiple platforms: Flash, DHTML, and J2ME. The dramatic emergence of Ajax over the past year was a first step in the transition from page-oriented HTML web applications towards more full-featured rich internet applications. OpenLaszlo provides another important step in this continuing evolutionary process through the increased productivity resulting from LZX's declarative approach. It provides developers with the tools to create web-based applications offering the usability and interactivity associated with desktop applications, and the low costs associated with web-based deployment. The cross-platform nature of Laszlo LZX applications allows source code with only minimum modifications to run natively on all popular web browsers, on all desktop operating systems, on the Flash platform, and other platforms in the future.    Written to address the needs of a wide spectrum of developers, ranging from client-side HTML and JavaScript developers all the way to enterprise-class Java or Rails engineers, this book provides a very hands-on approach towards building applications that solve real-world problems across both the Flash and DHTML platforms. Starting with the fundamentals of Laszlo LZX, the authors quickly move towards applying this knowledge to the design and development of a full-scale application called the Laszlo Market. This provides a working context to assist understanding the underlying concepts of Laszlo LZX and, more importantly, how to apply this knowledge in innovative ways. The construction of the Laszlo Market proceeds over the course of the book illustrating topics starting with an initial wireframe and storyboard design to optimization issues dealing with the application's deployment across the Flash and DHTML platforms.",
        "status": "PUBLISH",
        "authors": ["Norman Klein", "Max Carlson with Glenn MacEwen"],
        "categories": ["Web Development"]
    },
    {
        "title": "PowerBuilder 6.0 Questions & Answers",
        "isbn": "1884777708",
        "pageCount": 446,
        "publishedDate": { "$date": "1998-07-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
        "shortDescription": "If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
        "longDescription": "Demand for PowerBuilder programmers, with the potential they offer for rapid application development, continues to soar. If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
        "status": "PUBLISH",
        "authors": ["Tim Hatton"],
        "categories": ["PowerBuilder"]
    },
    {
        "title": "Groovy in Action",
        "isbn": "1932394842",
        "pageCount": 696,
        "publishedDate": { "$date": "2007-01-01T00:00:00.000-0800" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koenig.jpg",
        "longDescription": "Groovy, the brand-new language for the Java platform, brings to Java many of the features that have made Ruby popular. Groovy in Action is a comprehensive guide to Groovy programming, introducing Java developers to the new dynamic features that Groovy provides. To bring you Groovy in Action, Manning again went to the source by working with a team of expert authors including both members and the manager of the Groovy Project team. The result is the true definitive guide to the new Groovy language.    Groovy in Action introduces Groovy by example, presenting lots of reusable code while explaining the underlying concepts. Java developers new to Groovy find a smooth transition into the dynamic programming world. Groovy experts gain a solid reference that challenges them to explore Groovy deeply and creatively.    Because Groovy is so new, most readers will be learning it from scratch. Groovy in Action quickly moves through the Groovy basics, including:    Simple and collective Groovy data types  Working with closures and Groovy control structures  Dynamic Object Orientation, Groovy style  Readers are presented with rich and detailed examples illustrating Groovy's enhancements to Java, including    How to work with builders and the GDK  Database programming with Groovy  Groovy in Action then demonstrates how to Integrate Groovy with XML, and provides,    Tips and Tricks  Unit testing and build support  Groovy on Windows  An additional bonus is a chapter dedicated to Grails, the Groovy web application framework.",
        "status": "PUBLISH",
        "authors": [
            "Dierk Koenig with Andrew Glover",
            "Paul King",
            "Guillaume Laforge",
            "Jon Skeet"
        ],
        "categories": ["Java"]
    },
]



booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,title: 'Between-The-Covers',
        books
    });
});

booksRouter.get('/:i',function(req,res){
    const i = req.params.i
    res.render('book',{ nav,title: 'Between-The-Covers',
        book: books[i]
    });
});
  return booksRouter;
}


module.exports = router;

