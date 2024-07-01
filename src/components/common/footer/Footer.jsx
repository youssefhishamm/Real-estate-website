import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
    return ( <
        >
        <
        section className = 'footerContact' >
        <
        div className = 'container' >
        <
        div className = 'send flex' >
        <
        div className = 'text' >
        <
        h1 > Do You Have Questions ? < /h1> <
        p > We 'll help you to grow your career and growth.</p> < /
        div > <
        button className = 'btn5' > Contact Us Today < /button> < /
        div > <
        /div> < /
        section >

        <
        footer >
        <
        div className = 'container' >
        <
        div className = 'box' >
        <
        div className = 'logo' >
        <
        img src = '../images/logo-light.png'
        alt = '' / >
        <
        h2 > it 's is a platform designed to make the school search process simpler and more efficient for parents like you to easily explore and compare a comprehensive range of educational institutions.</h2>   <
        p > Do you need any help ? < /p>

        <
        div className = 'input flex' >
        <
        input type = 'text'
        placeholder = 'Email Address' / >
        <
        button > Subscribe < /button> < /
        div > <
        /div> < /
        div >

        {
            footer.map((val) => ( <
                div className = 'box' >
                <
                h3 > { val.title } < /h3> <
                ul > {
                    val.text.map((items) => ( <
                        li > { items.list } < /li>
                    ))
                } <
                /ul> < /
                div >
            ))
        } <
        /div> < /
        footer > <
        />
    )
}

export default Footer