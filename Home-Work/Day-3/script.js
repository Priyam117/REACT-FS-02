const rootElement = document.getElementById('root');

const heading = React.createElement('h1', null, 'Topics Covered');

const paragraph1 = React.createElement('p', {className: "para"}, 'The following is the list of all the topics we covered in the MDN learning area');

const anchor1 = React.createElement('a', { href: '#' }, 'Getting started with the web');

const paragraph2 = React.createElement('p', {className: "para"}, 'Provides a pratical introduction to Web Development for complete beginners.');

const anchor2 = React.createElement('a', { href: '#' }, 'HTML -- Structuring the Web');

const paragraph3 = React.createElement('p', {className: "para"}, 'HTML, which stands for "HyperText Markup Language," is the standard markup language used to create and structure web pages. It is the backbone of every web page, and it defines the content and structure of a webpage by using a system of elements and tags. Here are some key points about HTML. HTML is a fundamental technology for web development and is often used in conjunction with other web technologies like CSS, JavaScript, and various server-side technologies to create fully functional websites and web applications.');

const anchor3 = React.createElement('a', { href: '#' }, 'CSS__ Styling the Web');

const paragraph4 = React.createElement('p', {className: "para"}, 'CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages written in HTML or XML. It defines how elements on a web page should be displayed, including their fonts, colors, spacing, positioning, and more. Here are the key aspects of CSS.CSS is an essential part of web development and is often used alongside HTML and JavaScript to create visually appealing and functional websites and web applications. It empowers web designers and developers to control the look and feel of web content and ensure a consistent and appealing user experience.');

ReactDOM.render(
  React.createElement('div', { className: 'main-content' },
    heading,
    paragraph1,
    anchor1,
    paragraph2,
    anchor2,
    paragraph3,
    anchor3,
    paragraph4
  ),
  rootElement
);
