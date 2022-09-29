export const Blogs = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-orange-500 mt-10 text-center">
        Blogs
      </h2>
      <div className="mt-5">
        <h2 className="font-medium text-xl">Q1: How Does React Work?</h2>
        <p>
          <span className="font-medium">Ans:</span> ReactJS divides the UI into
          isolated reusable pieces of code known as components. React components
          work similarly to JavaScript functions as they accept arbitrary inputs
          called properties or props. React uses a declarative paradigm that
          makes it easier to reason about your application and aims to be both
          efficient and flexible. React implements a virtual DOM that is
          basically a DOM tree representation in JavaScript. So when it needs to
          read or write to the DOM, it will use the virtual representation of
          it. Then the virtual DOM will try to find the most efficient way to
          update the browser's DOM.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="font-medium text-xl">
          Q2: What is the Difference between props and state?{" "}
        </h2>
        <p>
          <span className="font-medium">Ans:</span> Props are read-only
          components. It is an object which stores the value of attributes of a
          tag and works similarly to the HTML attributes. It allows the passing
          of data from one component to another components. On the other hand
          the state is an updatable structure that is used to contain data or
          information about the component and can change over time. The change
          in state can happen as a response to a user action or system event. It
          is the heart of the react component which determines the behavior of
          the component and how it will render.
        </p>
      </div>
      <div className="my-5">
        <h2 className="font-medium text-xl">
          Q3: What useEffect does except data loading?
        </h2>
        <p>
          <span className="font-medium">Ans:</span> useEffect hook allows you to
          perform side effects in your component. Apart from fetching data,
          useEffects also perform side effects like direct updating of DOM, and
          timers function like setTimeout. Dependencies argument of
          useEffect(callback, dependencies) lets you control when the
          side-effect runs. Use an empty dependencies array to invoke a
          side-effect once after component mounting.
        </p>
      </div>
    </div>
  );
};
