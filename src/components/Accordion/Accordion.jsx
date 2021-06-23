import React,{useState} from 'react'
import "./Accordion.css";

function Accordion() {

    const [accordion, setAccordion] = useState('false');

    const accordionComponent =  <div className="accordion-content">
                                    <p className="content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non tempora praesentium culpa architecto nesciunt ducimus similique dicta temporibus doloremque, sunt optio necessitatibus at asperiores? Autem tempore, repudiandae ex quasi earum pariatur mollitia perferendis ipsum assumenda beatae deleniti eaque recusandae.
                                    </p>
                                </div>

    const accordionHandler = ()=>{
        setAccordion(!accordion);
    }

    return (
        <div className = "main-Accordion-wrapper">

            <div className="accordion-trigger" onClick={accordionHandler}>
                <p className="titile">
                    sample title
                </p>
                <div className="fas fa-plus close"></div>
            </div>
            {accordion?"":accordionComponent}
            
        </div>
    )
}

export default Accordion
