// 这里是题目代码

// 批量执行设计器
function classMultipleRun(actions, actionArgs) {
    let instance = eval(`new ${actions[0]}(...${JSON.stringify(actionArgs[0])})`);
    let output = [null];

    for (let i = 1; i < actions.length; i++) {
        let result = instance[actions[i]](...actionArgs[i]);

        output[i] = result === undefined ? null : result;
    }

    console.log(JSON.stringify(output));
}

// 例如Leetcode.355用法
classMultipleRun(["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"], [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]);