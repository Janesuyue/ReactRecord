import React from 'react';

class GetSnapshotBeforeUpdate extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 我们是否在 list 中添加新的 items ？
        // 捕获滚动​​位置以便我们稍后调整滚动位置。
        console.log(prevProps, prevState)
        // if (prevProps.list.length < this.props.list.length) {
        //     const list = this.listRef.current;
        //     console.log(list)
        //     return list.scrollHeight - list.scrollTop;
        // }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
        // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
        //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
        console.log(prevProps, prevState, snapshot)
        // if (snapshot !== null) {
        //     const list = this.listRef.current;
        //     list.scrollTop = list.scrollHeight - snapshot;
        // }
    }

    render() {
        return (
            <div style={{ width: 200, height: 500, overflow: 'auto', border: '1px solid #eee' }} ref={this.listRef}>
                {/* ...contents... */}
                <div style={{ width: 200, height: 1000 }}></div>
            </div>
        );
    }
}

export default GetSnapshotBeforeUpdate