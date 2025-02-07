class TestClass {
  constructor() {
    console.log("Test created")
  }
  sayHello(origin: string) {
    console.log("Hello from Test from "+origin)
  }
}

const Test = new TestClass()

export default Test
