📌 Complete Example: Props in Class Components
Props in class components work similarly to functional components but are accessed using this.props. This approach was more common before React Hooks, and is still relevant for legacy applications.

✔️ Features in this Example
✅ Passing props from App.js (parent) to UserCard.js (child)
✅ Accessing props using this.props
✅ Using PropTypes for type validation
✅ Default props for missing values

✔️ How It Works

App.js (parent) passes props (name, age, email) to UserCard.js (child).
UserCard.js accesses these values using this.props.
If a prop is missing, the component falls back on default props.
PropTypes ensure type safety, warning developers if incorrect types are passed.

✔️ Why Use Props in Class Components?

Feature	Benefit
Works with Lifecycle Methods	Can use componentDidMount, componentDidUpdate, etc.
Prop Validation	Ensures data integrity with PropTypes
Enables Structured Data Passing	Makes component usage predictable
Backward Compatibility	Works well in older React projects

🚀 Real-World Use Cases for Class-Based Props

Enterprise React apps with older codebases
Legacy projects requiring lifecycle methods
Complex UI components that still use class-based patterns

🔍 Technical Concepts Explained
✅ Class-Based Component
📌 UserCard2 is a class-based component that extends Component and uses the render() method to return JSX.

✅ Props (this.props)
📌 Props are accessed using this.props instead of destructuring like in functional components.
📌 const { name, age, email } = this.props; extracts props for cleaner usage.

✅ JSX Rendering
📌 {name}, {age}, and {email} dynamically insert values from props into the component.

✅ Default Props (UserCard2.defaultProps)
📌 Provides fallback values if props are not passed from the parent component.

✅ PropTypes Validation (UserCard2.propTypes)
📌 Ensures that props received by the component have the expected data types.
📌 Helps catch bugs by issuing warnings in the console if incorrect types are passed.

✅ Inline Styles (const styles)
📌 Uses JavaScript objects to define styles and applies them via the style attribute.

✅ Component Export (export default UserCard2)
📌 Allows UserCard2 to be imported and used in other parts of the application.

🚀 This structure makes the component robust, type-safe, and reusable! 🎯