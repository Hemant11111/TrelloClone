import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../redux/store/store";

export function testingRenderWithContext(element: ReactElement) {
    return render(
        <Provider store={store}>
            {element}
        </Provider>
    )
}