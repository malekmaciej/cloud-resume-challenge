export default function ResumePage() {
  return (
    <>
    <div className="container">
        <div className="header">
            <div>
                <h1>MACIEJ MAŁEK</h1>
                <div className="job-title">AWS DevOps Engineer</div>
                <div className="contact">
                    malek.maciej@gmail.com - <a href="http:///maciejmalek.com">maciejmalek.com</a>
                </div>
            </div>
    </div>

    <div className="main">
        <h2>EXPERIENCE</h2>

        <div className="job-title">AWS DevOps Engineer</div>
        <div className="company">HSBC Service Delivery</div>
        <div className="meta">12/2020 - Present - Kraków</div>
        <ul>
            <li>Oversee the support and governance of over 1,000 AWS accounts and 6000+ Landing Zones within HSBC, enabling seamless cloud adoption for Application DevOps teams and cross-functional IT departments</li>
            <li>Led onboarding initiatives to AWS, ensuring alignment with enterprise security, compliance, and operational standards</li>
            <li>Managed and enhanced shared cloud services, including:
                <ul>
                    <li>Secure Internet Proxy</li>
                    <li>Transit Gateway automation</li>
                    <li>Integration with centralized monitoring and alerting platforms</li>
                </ul>
            </li>
            <li>Designed and maintained HSBC-hardened Linux operating systems, including:
                <ul>
                    <li>Amazon Linux 2/2023</li>
                    <li>Red Hat Enterprise Linux (RHEL) 7/8/9</li>
                </ul>
            </li>
            <li>Contributed to the design and implementation of AWS Landing Zones and Service Control Policies (SCPs) within AWS Organizations to enforce governance across project accounts</li>
            <li>Developed reusable Terraform modules to standardize infrastructure provisioning and improve deployment efficiency</li>
            <li>Automated operational workflows using AWS Systems Manager and AWS Lambda, driving scalability and reducing manual overhead</li>
        </ul>

        <div className="job-title">Trainer</div>
        <div className="company">InfoShare Academy</div>
        <div className="meta"> 05/2022 - Present</div>
        <ul>
            <li>Providing training sessions for DevOps on AWS Cloud, Terraform, Linux</li>
        </ul>

        <div className="job-title">Cloud Platform Engineer</div>
        <div className="company">HSBC Service Delivery</div>
        <div className="meta">05/2020 - 12/2020 - Kraków</div>
        <ul>
            <li>Technical Product Owner for EC2 based services (SMTP TCP Proxy, Splunk Connector, AMI Bakery, NodeJS Reference Architecture pattern) used by cross functional teams</li>
            <li>Responsible for maintenance, enhancements and expansion of the products to other AWS regions</li>
        </ul>

        <div className="job-title">Staff Engineer</div>
        <div className="company">Motorola Solutions Systems Polska</div>
        <div className="meta">2018 - 2020 - Kraków</div>
        <ul>
            <li>Staff Engineer (IT Cloud Solutions Architect) 2018 - 2020</li>
            <li>TechLead for EMEA Operation Team and Solutions Team</li>
        </ul>

        <div className="job-title">Senior Engineer</div>
        <div className="company">Motorola Solutions Systems Polska</div>
        <div className="meta">2015 - 2018 &nbsp;&nbsp; 📍 Unknown</div>
        <ul>
            <li>Create and document guidelines for IT teams and business application teams on how to choose the best cloud environment for their needs</li>
            <li>Create CI/CD build environments (based on Docker and AWS provisioning of EC2 instances and integration with other engineering applications)</li>
            <li>Advocate and architect of Infrastructure as Code (Terraform) and NoOps principles</li>
            <li>Senior Engineer (Cloud Operation Engineer) - Operation Engineer working with various Amazon Web Services (EC2, ELB, RDS, S3, ECS, Route53, Lambda, IAM, CloudTrail, ACM, etc.)</li>
            <li>Maintain current Linux systems (migrated and cloud native) - provisioning scripts, design and implement CloudWatch alarms</li>
            <li>Help to design cloud native applications - EC2 instances, ELBs, IAM Roles and Policies</li>
            <li>Automated tasks based on CloudWatch events and AWS Lambda (functions in Python)</li>
            <li>TechLead for EMEA Operation Team</li>
            <li>Senior Software Engineer (Tester) 2015 - 2017</li>
        </ul>
    </div>

    <div className="sidebar">
        <h2>SUMMARY</h2>
        <p className="summary-text">I have 20 years of corporate experience in IT systems management and Unix/Linux server administration. Since 2017, I have been migrating systems to AWS cloud and creating new solutions using Amazon Linux, Docker, Terraform, Python, Bash, and many AWS services.</p>

        <h2>SKILLS - AWS</h2>
        <div className="skills">
            <span className="skill">VPC</span>
            <span className="skill">EC2</span>
            <span className="skill">IAM</span>
            <span className="skill">S3</span>
            <span className="skill">AWS Lambda</span>
            <span className="skill">Route 53</span>
            <span className="skill">CloudTrail</span>
            <span className="skill">AWS Organizations</span>
            <span className="skill">RDS</span>
            <span className="skill">CloudWatch</span>
        </div>

        <h2>SKILLS - OTHER</h2>
        <div className="skills">
            <span className="skill">Amazon Linux 2/2023</span>
            <span className="skill">RHEL 8/9</span>
            <span className="skill">Bash</span>
            <span className="skill">Python</span>
            <span className="skill">Terraform</span>
            <span className="skill">Solaris</span>
            <span className="skill">Docker</span>
        </div>

        <h2>LANGUAGES</h2>
        <div className="lang-level">
            <span>Polish</span>
            <span>Native</span>
        </div>
        <div className="lang-level">
            <span>English</span>
            <span>Advanced</span>
        </div>
    </div>
    </div>
    </>
  );
}