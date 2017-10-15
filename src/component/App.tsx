import * as React from "react";
import {LocaleProvider, DatePicker, Button} from 'antd'
import ja_JP from 'antd/lib/locale-provider/ja_JP';

interface AppProps {}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <LocaleProvider locale={ja_JP}>
                <div>
                    <DatePicker />
                    <Button type="primary">Button</Button>
                </div>
            </LocaleProvider>
        );
    }
}
