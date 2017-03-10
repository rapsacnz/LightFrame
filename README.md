# LightFrame
A Simple Lighting Framework Extension

This framework uses Salesforce Lightning and simplifies things a little - 
- calls to the server are abstracted to remove all the boilerplate.
- Notifications and Spinners are handled by the Abstract class
- All return values from the controller are encapsulated in a Result class that contains a `success` boolean, a `messsage` and a `data` object
