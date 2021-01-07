import React from 'react';
import './Resume.scss';
import profile_picture from "../assets/profile_picture.png";
import ScrollArrow from "./ScrollArrow";

function Resume() {
    return (
        <div className="resume-wrapper">  
            <div className="resume-wrapper__col resume-wrapper__left">
                <img src={profile_picture} alt="avatar" className="profile_picture"/>
                <div className="info">
                    <h2 className="my-name">Maria Naroditski</h2>
                    <h4 className="programmer">Programmer</h4>
                    <p className="looking-for"> 
                        Highly organized, detail-oriented, creative and dependable 
                        graduate with honors from the Holon Institute of Technology is looking for 
                        a position as a Web Developer.
                    </p>
                    <h4 className="title">Contacts</h4>
                    <div className="contacts">
                        <h5>Phone:</h5>
                        <p className="phone">0545560378</p>
                        <h5>Email:</h5>
                        <p className="email"> marianaro159@gmail.com</p>
                        <div className="social-links">  
                            <a
                                href="https://www.linkedin.com/in/maria-naroditski"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            <a
                            href="https://github.com/MariaNaroditski"
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>    
                        </div> 
                    </div>
                    <h4 className="title">Personal Qualifications</h4>
                    <ul className="qualifications">
                        <li>Self learner.</li>
                        <li>Highly organized.</li>
                        <li>Detail-oriented.</li>
                        <li>"Out Of Box" thinking.</li>
                        <li>Highly motivated.</li>
                        <li>A team worker.</li>
                        <li>Good interpersonal skills.</li>
                    </ul>
                    <h4 className="title">Skills</h4>
                    <ul className="skills">
                        <li>HTML</li>
                        <li>CSS / SCSS</li>
                        <li>Bootstrap</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>EJS -Embedded JS templates</li>
                    </ul>
                </div>
            </div>
            <div className="resume-wrapper-col resume-wrapper__right ">
                {/* Education */}
                <h2 className="title">Education</h2>
                <div className="experience-wrapper">
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2015 - 2018</p>
                        </div>
                        <div className="col col-p">
                            <p>Graduated from Holon Institute of Technology with B.Sc. in computer science.</p>
                        </div>
                    </div>
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2009 - 2011</p>
                        </div>
                        <div className="col col-p">
                            <p>Graduated from Shenkar College with Electronics Engineer diploma (within an army project 'Rakia').</p>
                        </div>
                    </div>
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2006 - 2009</p>
                        </div>
                        <div className="col col-p">
                            <p>Graduated Ilan Ramon high-school with full diploma.</p>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <h2 className="title">Experience</h2>
                <div className="experience-wrapper">
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2020 - 2021</p>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    Taking online courses on the following topics:
                                    <ul>
                                        <li>HTML, CSS / SCSS, Bootstrap.</li>
                                        <li>ES6, React, Redux, Flux, Node.js, Express.js.</li>
                                    </ul>
                                </li>
                                <li>
                                    Build projects during those courses:
                                    <ul>
                                        <li>Application management using <span className="store-type">React-Flux</span>.</li>
                                        <li>Application management using <span className="store-type">React - Redux</span>.</li>
                                        <li>Build an application by using Node.js - Express.js, EJS and MongoDB.</li>
                                    </ul>
                                </li>
                                 <li>Build this Portfolio Application.</li>
                            </ul>
                            <div className="projects-btn text-center">
                                <a href="/projects" className="btn btn-danger btn-sm" role="button">See All Projects</a>
                            </div> 
                        </div>
                    </div>
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2019 - 2020</p>
                        </div>
                        <div className="col col-p">
                            <p>Student position in Elisra - Elbit System:</p>
                            <ul>
                                <li>Project conversion ​​from Windows platform to Linux platform (C and C ++ languages).</li>
                                <li>Work with CMAKE.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2017 - 2018</p>
                        </div>
                        <div className="col col-p">
                            <p>Projects that done during academic studies:</p>
                            <ul>
                                <li>Build a secure server side:
                                    <ul>
                                        <li>XSS, CSRF, SQL Injection, Sessions Security and Cookies.</li>
                                        <li>ASP .NET - MVC.</li>
                                    </ul>
                                </li>
                                <li>Network Security Project (PT):
                                    <ul>
                                        <li>Work with Linux (Kali and Ubuntu) and Windows based operating systems.</li>
                                        <li>Work with VMware and creating a LAN with virtual machines.</li>
                                        <li>Exploiting existing vulnerabilities in older operating systems.</li>
                                        <li>Writing scripts.</li>
                                        <li>Work with Metasploit and MSFvenom.</li>
                                        <li>Work with Netcraft, Nslookup, nmap Nessus and more.</li>
                                        <li>Work with Wireshark.</li>
                                        <li>Understanding of TCP/IP Protocol: ARP, DNS, DHCP, HTTP, SMTP, FTP, UDP, TCP and more.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Army */}
                <h2 className="title">Army</h2>
                <div className="experience-wrapper">
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2013 - 2015</p>
                        </div>
                        <div className="col col-p">
                            <p>Served in IDF Career Army as:</p>
                            <ul>
                                <li>Commander of technician department – operating 43 communication facilities while working with various factors and people.</li>
                                <li>Provision of technical support to technicians and customers in the field.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-wrapper__row">
                        <div className="col">
                            <p className="years">2011 - 2013</p>
                        </div>
                        <div className="col col-p">
                            <p>Mandatory military service:</p>
                            <ul>
                                <li>Full service in IDF as a field technician in "Eitanim Darom" under "Hoshen" unit.</li>
                                <li>Work with versatile communication equipment in several fields:
                                    <ul>
                                        <li>SDH based communication – worked with ECI TELECOM products.</li>
                                        <li>IP Networking – worked with Juniper and Cisco equipment.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="army-p">Military service demanded working under a lot of pressure, in teams and in front of many civilian companies and military units.</p>
                <h2 className="title">Languages</h2>
                <ul className="language">
                    <li>Hebrew  - native language.</li>
                    <li>Russian - native language.</li>
                    <li>English - high level control.</li>
                </ul>
                <ScrollArrow />
            </div>  
        </div>
    )
}

export default Resume;