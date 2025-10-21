
import React from 'react'

function JSX() {
  const expressionSum =  1 + 1;

  const renderProductItem = (
    <span>this is product item</span>
  );

  // const renderTodoItem = () => {}
  function renderTodoItme() {
    return (
      <>this is function todo item</>
    )
  }

  console.log('location',location)

  return (
    <React.Fragment key="1">
      <h1>JSX</h1>
      <br />
      Expression in js: {expressionSum} <br />
      Function variabled: {renderProductItem} <br />
      Function todo item: {renderTodoItme()} <br />
      Element muust be closed: <input type="text" />
    </React.Fragment>
  )
}

export default JSX
