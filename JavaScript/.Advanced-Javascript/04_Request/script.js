// --- HTTP Request ---
	/* BackGround: HTTP request is the protocol of requests and responses enables you to 
				   view a page in your browser.
		
		What is HTTP: Hypertext Transfer Protocol(HTTP) is used to structure requests and
					 responses over the internet. HTTP requires data to be transferred from
					 one point to another over the network

					 TCP (Transmission Control Protocol), handles the transfer of resources.
					 In viewing this webpage, TCP manages the channels between your browser 
					 and the server (in this case, codecademy.com). 
					 HTTP is the command language that the devices on both sides of the connection
					 must follow in order to communicate. [GET, POST, PUT and DELETE]


	Client Side(Browser) ===>			TCP channel (sends HTTP GET)		===> Server Side (URL)
		- (Once the server sends response back to the client broswer the TCP connection is closed)
		- (If you something again from server, a new TCP connection is opeed, and the circle cont's)
*/
	



GET / HTTP/1.1
Host: www.codecademy.com

/* http://codecademy.com. 	<- Suppose we want to check this website (IP Address)
							- The Browser will extracts the http part and recognise it as the
							  name of the network protocol to use.
							- Then takes the domain name from the URL, in this case "codeacademy.com", 
							  and asks the (Internet Domain Name Server) to return an Internet Protocol(IP) address
							- Now the client knows the destination’s IP address.and a connection is opened to the server
							- a GET request to the server which contains the IP address of the 
							  host and optionally a data payload.

GET / HTTP/1.1
Host: www.codecademy.com - “HTTP/1.1” is a revision of the first HTTP, which is called HTTP/1.0
							- In HTTP/1.0, every resource request requires a separate connection to the server. 
							- While,  HTTP/1.1 uses one connection more than once, so that 
							  additional content (like images or stylesheets) is retrieved 
							  even after the page has been retrieved. [As a result, requests
							  using HTTP/1.1 have less delay than those using HTTP/1.0.]

							- The second line of the request contains the address of the 
							  server which is "www.codecademy.com". 
							  There may be additional lines as well depending on what data 
							  your browser chooses to send.
*/



HTTP/1.1 200 OK
Content-Type: text/html

/* If the server is able to locate the path requested, the server might respond with the 
   above header: This header is followed by the content requested, which in this case is 
   the information needed to render www.codecademy.com.

	- HTTP/1.1 200 OK, is confirmation that the server understands the protocol that the 
	  client wants to communicate with (HTTP/1.1),
	- Content-Type: text/html, shows the type of content that it will be sending to the client.
*/



HTTP/1.1 404 NOT FOUND

/* If the server is not able to locate the path requested by the client, it will respond 
	with the above header: 

	- the server identifies that it understands the HTTP protocol, but the 404 NOT FOUND 
	  status code signifies that the specific piece of content requested was not found.
	- This might happen if the content was moved or if you typed in the URL path 
	  incorrectly or if the page was removed
*/





//  -- HHTPS ---
/*	Since your HTTP request can be read by anyone at certain network junctures, it might not
	 be a good idea to deliver information such as your credit card or password using this
	  protocol. Fortunately, many servers support HTTPS, short for HTTP Secure, which allows
	   you to encrypt data that you send and receive. 

	HTTPS is important to use when passing sensitive or personal information to and from websites.
	However, it is up to the businesses maintaining the servers to set it up. In order to 
	support HTTPS, the business must apply for a certificate from a Certificate Authority.


AN ANALOGY:
	It can be tricky to understand how HTTP functions because it’s difficult to examine what your
browser is actually doing. (And perhaps also because we explained it using acronyms that may
be new to you.) Let’s review what we learned by using an analogy that could be more familiar
to you.
	Imagine the internet is a town. You are a client and your address determines where you can 
be reached. Businesses in town, such as Codecademy.com, serve requests that are sent to them. The
other houses are filled with other clients like you that are making requests and expecting 
responses from these businesses in town. This town also has a crazy fast mail service, an 
army of mail delivery staff that can travel on trains that move at the speed of light.
	Suppose you want to read the morning newspaper. In order to retrieve it, you write down 
what you need in a language called HTTP and ask your local mail delivery staff agent to retrieve 
it from a specific business. The mail delivery person agrees and builds a railroad track 
(connection) between your house and the business nearly instantly, and rides the train car 
labeled “TCP” to the address of the business you provided.
	Upon arriving at the business, she asks the first of several free employees ready to fulfill
the request. The employee searches for the page of the newspaper that you requested but cannot
find it and communicates that back to the mail delivery person.
	The mail delivery person returns on the light speed train, ripping up the tracks on the 
way back, and tells you that there was a problem “404 Not Found.” After you check the spelling
of what you had written, you realize that you misspelled the newspaper title. You correct it 
and provide the corrected title to the mail delivery person.
	This time the mail delivery person is able to retrieve it from the business. You can now
read your newspaper in peace until you decide you want to read the next page, at which point,
you would make another request and give it to the mail delivery person.
 */















