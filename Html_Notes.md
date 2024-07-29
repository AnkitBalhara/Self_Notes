HTML stands for `Hyper Text Markup Language`, which is the most widely used language on web to develop web pages. It describe the structure of a web page consists of a series of elements which tells the browser how to display the content.<br />
In HTML, "hypertext" refers to the ability to create links between different web pages or different sections within a web page. Hypertext allows users to navigate through interconnected information by clicking on links, which can lead to other pages, documents, or resources.<br />
A "markup language" is a system for annotating or adding additional information to text in order to provide structure, formatting, or instructions for how it should be displayed or interpreted. In the case of HTML, it is a markup language specifically designed for creating web pages. HTML uses tags (enclosed in angle brackets) to mark up elements within the document, indicating their purpose and how they should be presented in a web browser. The tags define the structure, content, and formatting of the web page, allowing browsers to render it correctly.
`HTML is not case sensitive`

## Basic structure
```html
<!DOCTYPE html>
<html>
   <head>
      <title>Basic Structure</title>
   </head>

   <body>
      
   </body>
</html>
```
1. `<!DOCTYPE ...>`: This tag defines the document type and HTML version used by the web browser.
2. `<html>`: This tag encloses the complete HTML document and mainly comprises of document header which is represented by <head>...</head> and document body which is represented by <body>...</body> tags.
3. `<head>`: This tag represents the document's header which can keep other HTML tags like `<title>`, `<link>` etc.
4. `<title>`: This tag is used inside the <head> tag to mention the document title.
5. `<body>`: This tag represents the document's body which keeps other HTML tags like `<h1>`, `<div>`, `<p>` etc.
## HTML element and tags
An element is a fundamental building block used to structue and define the content of a web page. Elements are represented by tags, which are enclosed within angle brackets ('<' and '>'). Tags provide instructions to the web browser on how to interpret and display the content.

The content between the opening and closing tags is what defines the element and its purpose. `<p>This is a paragraph.</p>`
`Empty element have no ending tag`

## HTML Basic tags
1. `<h1>...<h6>`: This tag represents the heading.
2. `<p>`: This tag represents a paragraph.
3. `<br />`: When we use this tag element, anything following it starts from the next line. If you omit this space, older browsers will have troble rendering the line break, while if we miss the forward slash character and just use <br> it is not valid in HTML.
4. `<center>`: Used to put any content in the center of the page or any table cell.
5. `<hr />`: Used to visually break-up sections of a document. It creates a line from the current position in the document to the right margin and breaks the line accordingly.
6. `<pre>`: Used to preserve the formatting of the source document.
7. `Nonbreaking spaces`: Used when you do not want the client browser to break text, we should use nonbreaking space entity `&nbsp;` instead of a normal space. `<p>An example of this technique appears in the movie "12&nbsp;Angry&nbsp;Men."</p>`

## HTML Attribute
An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag. All attributes are made up of two parts: a name and a value.
The name is the property we want to set and the value is what you want the value of the property to be set and always put within quotations.

### Core Attributes
1. `id`: used to uniquely identify any element within an HTML page and to distinguish between elements that have the same name.
2. `title`: gives a suggested title for the element. It is often displayed as a tooltip when cursor comes over the element or while the element is loading.
3. `class`: used to associate an element with a style sheet, and specifies the class of element.
4. `style`: allows us to specify CSS rules within the element.
   
### Internationalization Attributes
1. `dir`: allows us to indicate to the browser about the direction in which the text should flow. Can take two values `ltr` (left to right) which is default and `rtl` (right to left) which is for the languages such as Arabic. `<html dir = "rtl">`
2. `lang`: allows us to indicate the main language used in a document, but this attribute was kept in HTML only for backwards compatibility with earlier versions of HTML. `<html lang = "en">`
3. `xml:lang`: it is the XHTML replacement for the lang attribute.

### Generic attributes
1. `align`: horizontally align tags
2. `valign`: vertically aligns tags
3. `bgcolor` and `background`
4. `href`: specifies the URL of the page where link goes to.
5. `src`: specifies the path to the image to be displayed.
6. `width` and `height`
7. `alt`: specifies an alternate text for an image, if the image for some reason cannot be displayed.

## HTML formatting and phrase tags
1. `<b>...</b>`: is a presentational element used to simply apply bold formatting to the enclosed text.
2. `<strong>`: Important text. It is a semantic element that conveys importance or strong emphasis to the enclosed text.
3. `<i>`: Italic text (Presentational element)
4. `<em>`: Emphasized text (Semantic element)
5. `<u>`: Underlined text (Presentational element)
6. `<ins>`: Underlined text (Semantic element)
7. `<mark>`: Marked text or highlighed text
8. `<small>`: Smaller text
9. `<del>`: Deleted text. It is a semantic element used to represent content that has been deleted or removed from a document.
10. `<strike>`: Thin line through the text. It is a presentational element that was historically used to strike through or visually mark text as no longer valid or relevant.
11. `<ins>`: Inserted text
12. `<sub>`: Subscript text
13. `<sup>`: Superscript text
14. `<tt>`: monospaced text
15. `<big>`: Displayed one font size larget than the rest of the text
16. `<small>`
17. `<code>`
`Grouping Content`: div and span elements allow you to group together several elements to create sections or subsections of a page.
1. `div`: It is a block-level element that is commonly used as a container to group and organize other HTML elements. It represents a division or a section of the web page.
2. `span`: It is an inline element that is used to apply styles or manipulate specific portions of text within a larger block of content. Often used to apply CSS styles, such as color, font size, or background color, to a specific section of text.

## HTML quotation and citation elements
1. `<blackquote>`: defines a section that is quoted from another source.
2. `<q>`: insert quotation marks around the quotation.
3. `<abbr>`: defines an abbreviation or an acronym. use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.
4. `<address>`: defines the contact information for the author/owner of a document or an article. renders in italic.
5. `<cite>`: defines the title of a creative work. renders in italic.
6. `<bdo>`: BDO stands for Bi-Directional Override. Used to override the current text direction.`<bdo dir="rtl">This text will be written from right to left</bdo>`

## HTML links
A hyperlink, often referred to simply as a link, is a reference or connection from one web page to another web page, document, or resource. It is typically represented as a highlighted or underlined text, an image, or a button that can be clicked or activated by a user.

When a user clicks on a hyperlink, it triggers the browser to navigate to the linked location, which can be within the same website or on a different website altogether. Hyperlinks are an essential part of the World Wide Web, as they enable the interconnectedness of web pages and facilitate navigation between different online resources.
### anchor tag
`<a>`: This tag in HTML is used to create hyperlinks, allowing users to navigate to different web pages or specific sections within a page. It stands for "anchor" and is often referred to as the 'anchor tag.' It is an inline element.

href, target, anchors within the same page using '#'

`target`: attribute specifies where to open the linked document.
1. _self - Default. Opens the document in the same window/tab as it was clicked
2. _blank - Opens the document in a new window or tab
3. _parent - Opens the document in the parent frame
4. _top - Opens the document in the full body of the window
5. targetframe - Opens the linked document in a named targetframe

`<base>`: It is used to specify the base URL for all relative URLs within a document. It is placed within the `<head>` section of an HTML document and does not require a closing tag.

`mailto: xyz@gmail.com`: specify an email address to send an email. `<a href = "mailto: abc@example.com">Send Email</a>`
### link tag
`favicon`: image is displayed to the left of the page title in the browser tab. `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`

## Meta tag
It is used to provide metadata about an HTML document. It is placed within the <head> section of an HTML document and does not require a closing tag. The meta tag does not represent visible content on the webpage but rather provides information about the document itself.

Attributes used in meta tag:
1. `charset`: specifies the character encoding used in the HTML document. `<meta charset="UTF-8">`
2. `viewport`: It is used to control the layout and scaling of the webpage on mobile devices.`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. `description`: provides a brief description or summary of the webpage's content. `<meta name="description" content="This is a website about cooking recipes.">`
4. `keywords`: specifies a comma-separated list of keywords relevant to the webpage's content. <meta name="keywords" content="cooking, recipes, food, ingredients">`
5. `author`: specifies the name or identifier of the author of the webpage. `<meta name="author" content="John Doe">`

## HTML table
1. `<table>`,`<th>`,`<tr>`,`<td>`
2. `<caption>`: Serves as a title for the table adn it shows up at top of the table. deprecated in newer version.
3. `<thead>`: to create a separate table header
4. `<tbody>`: to indicate the main body of the table
5. `<tfoot>`: to create a separate table footer.
6. `<colgroup>`: specifies a group of one or more columns in a table for formatting. It is useful for applying stles to entire columns, instead of repeating the styles for each cell, for each row.
7. `<col>`: specifies column properties for each column with a `<colgroup>` element. It is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.
```html
<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>5869207</td>
    <td>My first CSS</td>
    <td>$49</td>
  </tr>
</table>
```
Attributes:
1. `border`: specifies the width of the table's border.
2. `width`: sets the width of the table.
3. `align`: aligns the table horizontally (left, right, center)
4. `cellpadding`: specifies the padding within each cell.
5. `cellspacing`: specifies the spacing between cells.
6. `colspan`: merge two or more columns into a single column.
7. `rowspan`: merge two or more rows into a single row.

## HTML image, map, area, picture
1. `<img>`: It is used to insert an image into an HTML document. It is a self-closing tag and requires the 'src' attribute, which specifies the URL or file path of the image. `<img src="image.jpg" alt="Description of the image">`
2. `<map>` and `<area>`: The <map> tag is used in conjunction with <area> tags to create image maps, which define clickable areas within an image. The <map> tag contains one or more <area> tags that define different regions or shapes within the image.
Shape of the clickable area, `rect`,`circle`,`poly`, and `default`
```html
<img src="image.jpg" alt="Description of the image" usemap="#map">
<map name="map">
  <area shape="rect" coords="0,0,100,100" href="page1.html">
  <area shape="circle" coords="150,150,50" href="page2.html">
</map>
```
1. `<picture>`: This element is used to define multiple sources for an image and allow the browser to choose the appropriate source based on factors like screen resolution or browser support. It is typically used to provide different versions of an image for different devices or display conditions, such as high-resolution screens or responsive design.
The `<picture>` element contains one or more `<source>` tags with different `srcset` attributes, each pointing to a different image source, and an `<img>` tag as a fallback.
```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 1200px)">
  <source srcset="image-medium.jpg" media="(min-width: 800px)">
  <img src="image-small.jpg" alt="Description of the image">
</picture>
```
## HTML lists
1. `<ul>`: An unordered list is used to represent a list of items where the order of the items is not important. Each list item is represented by the `<li>` (list item) tag. `type`: attribute to specify the type of bullet you like, square, disc, circle.
```html
<ul type = "circle">
    <li>Beetroot</li>
    <li>Ginger</li>
    <li>Potato</li>
    <li>Radish</li>
</ul>
```
2. `<ol>`: An ordered list is used to represent a list of items where the order of the items is important and should be displayed sequentially. `type`: attribute to specify the type of bullet you like, 1, I, i, A, a. `start`: attribute to sepcify the starting point of numbering we need.
```html
<ol type = "a" start="4"> <!-- now ordering start with d. -->
    <li>Beetroot</li>
    <li>Ginger</li>
    <li>Potato</li>
    <li>Radish</li>
</ol>
```
3. `<dl>`: A definition list is used to represent a list of terms and their corresponding definitions or descriptions. Each term is represented by the `<dt>` (definition term) tag, and each definition is represented by the `<dd>` (definition description) tag.
```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
</dl>
```
## HTML block and inline
A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
`<address>      <article>       <aside>     <blockquote>    <canvas>    <dd>    <div>   <dl>    <dt>    <fieldset>  <figcaption>    <figure>    <footer>    <form>  <h1>-<h6>   <header>    <hr>    <li>    <main>      <nav>   <noscript>  <ol>    <p> <pre>   <section>   <table>     <tfoot>     <ul>    <video>`

An inline element does not start on a new line. It only takes up as much width as necessary.
`<a>    <abbr>  <acronym>   <b>  <bdo> <big>    <br>    <button>    <cite>  <code>    <dfn>   <em>   <i>    <img>   <input>    <kbd>   <label>    <map>   <object>   <output>   <q>    <samp>  <script>  <select>  <small>   <span>     <strong>    <sub>    <sup>   <textarea>    <time>   <tt>   <var>`

## HTML frames
Frames in HTML were a feature used in older versions of HTML to divide a web page into multiple independent sections or windows, each with its own content.

## HTML iframes
An iframe (short for "inline frame") is an element used to embed content from another HTML document or external source within the current web page. It provides a way to include external content such as a webpage, video, map, or any other HTML document seamlessly wihtin the main document. `<iframe src="external.html" width="500" height="300" title="Embedded Content"></iframe>`

Additional attributes:
1. `sandbox`: specifies a sandbox policy for the iframe, restricting its capabilities (e.g., preventing scripts or form submissions).
2. `allowfullscreen`: Allows the embedded content to be displayed in fullscreen mode.
3. `frameborder`: specifies whether or not to display a border around the iframe.
4. `scrolling`: defines whether scrollbars should be shown for the iframe (possible values: "yes", "no","auto")

Iframes are commonly used to embed third-party content, such as maps from Google Maps, videos from YouTube, or social media plugins, into web pages.

## HTML script and noscript
`<script>`: define a client-side js.
`<noscript>`: defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts.
```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```
iframe- target for a link
```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

## HTML layout elements
1. `<header>`: Represents the introductory content or the header section of a document or a section within a document. It often contains branding, logos, navigation menus, and introductory text.
2. `<nav>`: Defines a section of navigation links or menus. It is typically used to create menus for navigating within the website or to other sections of the web page.
3. `<main>`: Represents the main content of the document. It should contain the primary content that is unique to the document, excluding header, footer, and navigation elements.
4. `<section>`: Represents a standalone section of content within a document. It can be used to divide the content into meaningful sections, such as chapters, articles, or different parts of a webpage.
5. `<article>`: Represents a self-contained composition that can be independently distributed or reused, such as a blog post, news article, or a forum post. It should make sense on its own and be able to be extracted and syndicated independently of the rest of the webpage.
6. `<aside>`: Represents content that is tangentially related to the main content. It is often used for sidebars, pull quotes, advertisements, or other supplementary content.
7. `<footer>`: Represents the footer section of a document or a section within a document. It typically contains information about the author, copyright information, contact details, or links to related documents.

## HTML code elements
There are specific elements designed to represent computer code or programming code snippets within a document. These elements help to differentiate code from regular text and provide styling options for code presentation.
1. `<code>`: The `<code>` element is used to represent inline code snippets within a paragraph or text. It typically renders the code in a monospaced font without any additional formatting or line breaks.
2. `<pre>`: The `<pre>` element is used to represent blocks of preformatted text, including code blocks. It preserves whitespace and line breaks exactly as they appear within the `<pre>` tags. By default, the text within `<pre>` is rendered in a monospaced font.
3. `<kbd>`: The `<kbd>` element is used to represent user input or keyboard input. It is typically used to denote keyboard shortcuts, command sequences, or interactive input.
4. `<samp>`: The `<samp>` element is used to represent sample or output from a computer program or script. It is commonly used to display the results of code execution or example output.
5. `<var>`: The `<var>` element is used to represent variables or placeholders in computer code or mathematical expressions. It is often used to highlight variable names or placeholders within code snippets.
```html
<p>To install the package, open the terminal and type <code>npm install package-name</code>.</p>

<pre>
<code>
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
</code>
</pre>

<p>Press <kbd>Ctrl+C</kbd> to exit the program.</p>

<p>The output of the script is: <samp>Hello, World!</samp></p>

<p>The equation for a straight line is <var>y = mx + c</var>.</p>
```

## HTML semantic elements
Semantic elements in HTML are tags that provide meaning and structure to the content within a web page. These elements convey the purpose and significance of different sections or elements of the page, making the HTML code more meaningful and accessible to both humans and search engines.
1. `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
2. `<figure>`: Represents self-contained content, such as images, illustrations, diagrams, or code examples, that is referenced within the main content of the document. It is often used in conjunction with the `<figcaption>` element to provide a caption or description for the content.
3. `<figcaption>`: Represents a caption or description for the content within a `<figure>` element. It provides a textual explanation or context for the associated content.
```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```
4. `<time>`: Represents a specific date, time, or duration. It is commonly used to mark up dates and times within the content, such as publication dates, event schedules, or durations.

## HTML forms
HTML forms are used to collect user input and send it to a server for processing. They allow users to interact with a webpage by entering data, making selections, and submitting the form to perform an action or trigger a server-side process.
1. `<form>`: The `<form>` element is used to create a form on a webpage. It acts as a container for form elements and defines the submission method (GET or POST) and the target URL for sending the form data.
2. `<input>`: The `<input>` element is used to create various types of form controls, such as text fields, checkboxes, radio buttons, submit buttons, and more. The type attribute of the `<input>` element determines the specific type of control to be created.
3. `<select>`: The `<select>` element is used to create a dropdown menu or a list of options from which users can select one or multiple choices. It is often used with `<option>` elements to define the available choices.
4. `<textarea>`: The `<textarea>` element is used to create a multi-line text input field, allowing users to enter larger blocks of text or provide longer descriptions.
5. `<button>`: The `<button>` element is used to create a clickable button within a form. It can be used for form submission or to trigger custom JavaScript functions.
6. `<label>`: The `<label>` element is used to associate a label or text with a form control. It improves accessibility by providing a clear description or instruction for the associated control.
7. `<fieldset>` and `<legend>`: The `<fieldset>` element is used to group related form elements together. The `<legend>` element is used within the `<fieldset>` to provide a caption or title for the grouped elements.
8. `<form>` attributes: The `<form>` element can have additional attributes, such as action (specifying the URL where the form data should be submitted), method (specifying the HTTP method for form submission, typically GET or POST), and enctype (specifying how the form data should be encoded for submission, usually multipart/form-data for file uploads).
9. `<legend>`: The `<legend>` element is used within a `<fieldset>` element to provide a caption or title for the grouped elements. It helps in providing a descriptive title or heading for the associated form controls within the fieldset.
10. `<datalist>`: The `<datalist>` element is used to provide a predefined list of options for an `<input>` element with the list attribute. It works as a suggestion list that the user can choose from while typing in the associated input field .
11. `<option>`: The `<option>` element is used within a `<select>` or `<datalist>` element to defined an option within a dropdown list or suggestion list.
12. `<optgroup>`: The `<optgroup>` element is used to group related `<option>` elements within a `<select>` element. It helps in organizing the options into distinct categories or groups.
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <input type="submit" value="Submit">
</form>
```

## HTML form attributes
1. `action`: Specifies the URL or destination where the form data should be submitted when the form is submitted. `<form action="/submit" method="POST">`
2. `method`: Specifies the HTTP method to be used when submitting the form. It can be either "GET" or "POST". `<form method="POST">`
3. `target`: Specifies where the response from the form submission should be displayed. It can be set to "_blank" to open the response in a new window or frame. `<form target="_blank">`
4. `name`: Specifies the name of the form. It is used to identify the form when processing it on the server-side. `<form name="myForm">`
5. `autocomplete`: Specifies whether the form should have autocomplete functionality enabled or disabled. It can be set to "on" or "off". `<form autocomplete="off">`
6. `novalidate`: Specifies that the form should not be validated by the browser. This attribute is used to disable built-in form validation. `<form novalidate>`
7. `enctype`: Specifies how the form data should be encoded when submitting the form. It is used when handling file uploads. `<form enctype="multipart/form-data">`
8. `required`: Specifies that an input field must be filled out before the form can be submitted. `<input type="text" required>`
9. `placeholder`: Specifies a short hint that describes the expected value of an input field. It is displayed in the field before the user enters a value. `<input type="text" placeholder="Enter your name">`
10. `readonly`: Specifies that an input field should be read-only and cannot be edited by the user. `<input type="text" readonly>`
11. `disabled`: Specifies that an input field should be disabled and cannot be interacted with or edited by the user. `<input type="text" disabled>`

## HTML input types
1. `text`: Creates a single-line text input field. `<input type="text">`
2. `password`: Creates a password input field where the entered text is masked. `<input type="password">`
3. `email`: Creates an email input field that validates the input as an email address. `<input type="email">`
4. `number`: Creates a numeric input field that restricts the input to numbers. `<input type="number">`
5. `date`: Creates a date input field for selecting a date. `<input type="date">`
6. `checkbox`: Creates a checkbox input field for selecting one or more options. `<input type="checkbox">`
7. `radio`: Creates a radio button input field for selecting a single option from a group. `<input type="radio">`
8. `file`: Creates a file upload input field for selecting files from the user's device. `<input type="file">`
9. `color`: Creates a color picker input field for selecting a color. `<input type="color">`
10. `range`: Creates a slider input field for selecting a value within a specified range. `<input type="range">`
11. `search`: Creates a search input field for entering search terms. `<input type="search">`
12. `tel`: Creates a telephone number input field for entering phone numbers. `<input type="tel">`
13. `url`: Creates a URL input field for entering website URLs. `<input type="url">`
14. `hidden`: Creates a hidden input field that is not displayed to the user but can store data. `<input type="hidden">`

## HTML input attributes
1. `maxlength`: Specifies the maximum number of characters allowed in the input field. `<input type="text" maxlength="10">`
2. `min` and `max`: Specifies the minimum and maximum values allowed for number or date input fields. `<input type="number" min="0" max="100">`
3. `pattern`: Specifies a regular expression pattern that the input value must match. It can be used for custom input validation. `<input type="text" pattern="[A-Za-z]{3}">`
4. `autocomplete`: Specifies whether the input field should have autocomplete functionality enabled or disabled. `<input type="text" autocomplete="off">`
5. `autofocus`: Specifies that the input field should automatically receive focus when the page loads. `<input type="text" autofocus>`
6. `size`: Specifies the width of the input field in characters. `<input type="text" size="20">`
7. `step`: Specifies the increment or decrement step for number input fields. `<input type="number" step="0.5">`
8. `minlength`: Specifies the minimum number of characters required in the input field. `<input type="text" minlength="6">`
9. `multiple`: Specifies that the user can select multiple values in an input field. Used with input type="file" and input type="email". `<input type="file" multiple>`
10. `accept`: Specifies the file types that are allowed to be uploaded in an input type="file" field. `<input type="file" accept=".jpg, .png, .gif">`
11. `autocomplete`: Specifies whether the browser should remember and populate the input field with previously entered values. `<input type="text" autocomplete="on">`
12. `list`: Specifies the ID of a `<datalist>` element that provides a list of predefined options for the input field. `<input type="text" list="fruits">` `<datalist id="fruits">` ... `</datalist>`
13. `checked`: Specifies that a checkbox or radio button should be pre-selected by default. `<input type="checkbox" checked>`
14. `autocapitalize`: Specifies whether the input field should automatically capitalize the input. `<input type="text" autocapitalize="words">`
15. `spellcheck`: Specifies whether the browser should perform spell checking on the input field. `<input type="text" spellcheck="true">`
16. `inputmode`: Specifies the keyboard input mode for mobile devices. `<input type="text" inputmode="numeric">`

## HTML input form* attributes
1. `form`: Specifies the ID of the form that the input element belongs to. It associates the input with a specific form. `<input type="text" form="myForm">`
2. `formaction`: Specifies the URL or location where the form data should be submitted to, overriding the form's action attribute. `<input type="submit" formaction="/submit">`
3. `formmethod`: Specifies the HTTP method to be used when submitting the form, overriding the form's method attribute. It can be "GET" or "POST". `<input type="submit" formmethod="POST">`
4. `formenctype`: Specifies how the form data should be encoded when submitted, overriding the form's enctype attribute. `<input type="submit" formenctype="multipart/form-data">`
5. `formtarget`: Specifies where the response from the form submission should be displayed, overriding the form's target attribute. `<input type="submit" formtarget="_blank">`
6. `formnovalidate`: Specifies that the form should not be validated when submitted, overriding the form's novalidate attribute. `<input type="submit" formnovalidate>`
7. `formautocomplete`: Specifies whether the browser should provide autocomplete suggestions for the input field, overriding the form's autocomplete attribute. `<input type="text" formautocomplete="off">`
8. `formvalidate`: Specifies whether the input element should participate in form validation, overriding the form's validation behavior. `<input type="text" formvalidate="true">`

## HTML canvas and svg graphics
HTML canvas provides a powerful and flexible way to create graphics and visual elements directly in the browser using JavaScript.
1. Creating a Canvas: `<canvas id="myCanvas" width="500" height="300"></canvas>`
2. Getting a 2D rendering context:To draw on the canvas, you need to obtain a 2D rendering context using the getContext() method. Pass in the argument "2d" to get a 2D rendering context.
```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```
3. Drawing Shapes:Use various methods provided by the 2D rendering context (ctx) to draw shapes, lines, and curves on the canvas.
   1. ctx.fillRect(x, y, width, height): Draws a filled rectangle.
   2. ctx.strokeRect(x, y, width, height): Draws the outline of a rectangle.
   3. ctx.beginPath(): Begins a path for drawing.
   4. ctx.moveTo(x, y): Moves the current drawing position.
   5. ctx.lineTo(x, y): Draws a straight line from the current position to the specified position.
   6. ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise): Draws an arc or circle.
4. Styling and Colors: You can set various attributes to style the graphics, such as fill and stroke colors, line widths, and transparency. 
   1. ctx.fillStyle: Sets the fill color for shapes.
   2. ctx.strokeStyle: Sets the stroke color for outlines.
   3. ctx.lineWidth: Sets the width of the lines.
   4. ctx.globalAlpha: Sets the transparency (alpha) value.
   5. ctx.shadowOffsetX, ctx.shadowOffsetY, ctx.shadowBlur, ctx.shadowColor: Sets the shadow properties.
   
`SVG`: stands for Scalable Vector Graphics and it is used to define graphics for the web.
```html
<svg width="400" height="100">
  <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
</svg>
```

## HTML multimedia
HTML provides several elements and attributes for embedding multimedia content such as images, videos, and audio into web pages.
1. `<video>`: This element is used to embed videos into a web page. It supports various attributes like src (URL of the video file), controls (displays video controls), autoplay (automatically starts playing the video), autoplay, muted, and more. `<video src="video.mp4" controls></video>`
2. `<audio>`: This element is used to embed audio files into a web page. It supports attributes like src (URL of the audio file), controls (displays audio controls), autoplay (automatically starts playing the audio), and more. `<audio src="audio.mp3" controls></audio>`
3. `<iframe>`: This element is used to embed external web content within a web page. It is commonly used for embedding maps, social media content, and other external resources. `<iframe src="https://www.youtube.com/embed/VIDEO_ID" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
4. `<source>`: This element is used as a child of the `<video>` and `<audio>` elements to specify alternative media sources. It allows providing multiple formats of the media file to support different browsers and devices. 
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

## HTML entities
In HTML, entities are special codes used to represent characters that have special meaning or cannot be easily represented directly in HTML code. They are also known as character entities or HTML entities. Entities are particularly useful when you need to display reserved characters or symbols as text within an HTML document. Here are a few commonly used entities in HTML:
1. `&lt;` represents the less-than symbol (<).
2. `&gt;` represents the greater-than symbol (>).
3. `&amp;` represents the ampersand symbol (&).
4. `&quot;` represents the double quotation mark (").
5. `&apos;` represents the single quotation mark (').
6. `&nbsp;` represents a non-breaking space.
7. `&copy;` represents the copyright symbol (©).
8. `&reg;` represents the registered trademark symbol (®).
9. `&mdash;` represents an em dash (—).
10. `&ldquo;` represents a left double quotation mark (“).

## HTML containers
In HTML, "containers" generally refer to elements or tags that are used to group and contain other elements or content within them. Containers play a crucial role in structuring and organizing the layout of a web page.
1. `<div>`: The `<div>` element is a generic container that does not have any inherent semantic meaning. It is often used to group and style related content or sections of a web page.
2. `<span>`: The `<span>` element is an inline container that is typically used for grouping and styling a small portion of text or inline elements within a larger block of content.
3. `<section>`: The `<section>` element represents a standalone section of content within a document. It is typically used to divide the content into meaningful sections, such as chapters, headers, footers, or specific parts of a web page.
4. `<article>`: The `<article>` element represents a self-contained composition or independent piece of content, such as a blog post, news article, or forum post. It should make sense and be meaningful on its own.
5. `<header>`: The `<header>` element represents the introductory or navigational section at the top of a document or a section within a document. It often contains headings, logos, navigation menus, or other introductory content.
6. `<nav>`: The `<nav>` element is used to define a section of navigation links within a document. It is typically used for site navigation menus, allowing users to navigate between different sections or pages.
7. `<footer>`: The `<footer>` element represents the footer or closing section of a document or a specific section within a document. It often contains information about the author, copyright notices, contact details, or links to related documents.