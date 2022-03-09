export const questionBank = () => ({
	csharp: [
		{
			question: 'What is an Object?',
			answer:
				'An object is an instance of a class through which we access the methods of that class. “New” keyword is used to create an object. A class that creates an object in memory will contain the information about the methods, variables and behavior of that class.',
		},
		{
			question: 'What is a Constructor? ',
			answer:
				'A constructor is a member function in a class that has the same name as its class. The constructor is automatically invoked whenever an object class is created. It constructs the values of data members while initializing the class.',
		},
		{
			question: 'What is the difference between ref and out parameters?',
			answer:
				'An argument passed as ref must be initialized before passing to the method whereas out parameter needs not to be initialized before passing to a method.',
		},
		{
			question: 'What is serialization?',
			answer:
				'When we want to transport an object through network then we have to convert the object into a stream of bytes. The process of converting an object into a stream of bytes is called Serialization. For an object to be serializable, it should implement ISerializable Interface. De-serialization is the reverse process of creating an object from a stream of bytes.',
		},
		{
			question: 'What is the difference between constants and read-only variables?',
			answer:
				'Constant variables are declared and initialized at compile time. The value can’t be changed afterwards. Read only is used only when we want to assign the value at run time.',
		},
		{
			question: 'What is “this”, and where can it NOT be used?',
			answer:
				'We can’t use ‘this’ in a static method because we can only use static variables/methods in a static method.',
		},
		{
			question: 'What are value types and reference types? Name a few examples of each.',
			answer: 'Value types are stored in the Stack whereas reference types stored on heap.',
		},
		{
			question: 'What are sealed classes? ',
			answer:
				'We create sealed classes when we want to restrict the class to be inherited. Sealed modifier used to prevent derivation from a class. If we forcefully specify a sealed class as base class then a compile-time error occurs.',
		},
		{
			question: 'What are the differences between System.String and System.Text.StringBuilder?',
			answer:
				'System.String is immutable. When we modify the value of a string variable then a new memory is allocated to the new value and the previous memory allocation released. System.StringBuilder was designed to have concept of a mutable string where a variety of operations can be performed without allocation separate memory location for the modified string.',
		},
		{
			question: 'What is the base class in .NET from which all classes are derived from?',
			answer: 'System.Object',
		},
		{
			question: 'What’s the difference between an interface and abstract class?',
			answer:
				'Interfaces have all the methods having only declaration but no definition. In an abstract class, we can have some concrete methods. In an interface class, all the methods are public. An abstract class may have private methods.',
		},
		{
			question: 'What are C# attributes?',
			answer:
				'C# provides developers a way to define declarative tags on certain entities eg. Class, method etc. are called attributes. The attribute’s information can be retrieved at runtime using Reflection.',
		},
		{
			question: 'In your own words, describe in C# how to implement the singleton design pattern?',
			answer: 'In singleton pattern, a class can only have one instance and provides access point to it globally.',
		},
		{
			question: 'In your own words, describe two methods of type casting in C#? What are the differences?',
			answer: 'Explicit "(Type) instance" and Implicit "instance as Type"',
		},
		{
			question: 'Is C# code managed or unmanaged code? What is the difference?',
			answer: 'C# is managed code because Common language runtime can compile C# code to Intermediate language.',
		},
		{
			question: 'Describe in your own words the importance of Garbage collection in .NET',
			answer:
				"Garbage collector of .NET tries to compact the memory in such a way as to increase the working space required for heap. The core task of performing a collection is executed by the GC’s optimizing engine that determines the best time to perform collection based on allocations being made. GC runs are non-deterministic since the call to GC cannot be guaranteed. However, explicit calls to the overloaded 'Collect()' method of the class GC can be used whenever needed.",
		},
	],
});