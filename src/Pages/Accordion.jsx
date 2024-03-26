import React from 'react';
import "../App.css"

class Accordion extends React.Component {
  handleClick = (index) => {
    const accordionItem = document.getElementsByClassName('container')[index];
    accordionItem.classList.toggle('active');
  }

  render() {
    return (
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        <hr />
        <div className="container" onClick={() => this.handleClick(0)}>
          <div className="label">What is Job Portal</div>
          <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
        </div>
        <hr />
        <div className="container" onClick={() => this.handleClick(1)}>
          <div className="label">What is AI help?</div>
          <div className="content">CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.</div>
        </div>
        <hr />
        <div className="container" onClick={() => this.handleClick(1)}>
          <div className="label">What is Instant Resume Sending Functionality?</div>
          <div className="content">CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.</div>
        </div>        
        <hr />
        <div className="container" onClick={() => this.handleClick(1)}>
          <div className="label">What is Current Job Data?</div>
          <div className="content">CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.</div>
        </div>        
        <hr />
        <div className="container" onClick={() => this.handleClick(1)}>
          <div className="label">Filters for Fetching Job?</div>
          <div className="content">CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.</div>
        </div>   
        <hr />


      </div>
    );
  }
}

export default Accordion;
