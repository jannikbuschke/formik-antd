import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(<div>test</div>, document.getElementById("root") as HTMLElement);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
