var longestPath = function(parent, s) {
    const graph = {}

    for (let i = 0; i < parent.length; i++) {
        graph[i] = [];
    }

    for (let i = 1; i < parent.length; i++) {
        graph[parent[i]].push(i);
    }

    let ans = 1;
    
    function dfs(node) {
        let longest = 0;
        let secondLongest = 0;

        for (let child of graph[node]) {
            const length = dfs(child);
            if (s[child] !== s[node]) {
                if (length > longest) {
                    secondLongest = longest;
                    longest = length;
                } else if (length > secondLongest) {
                    secondLongest = length;
                }
            }
        }

        ans = Math.max(ans, longest + secondLongest + 1);
        return longest + 1;
    }

    dfs(0);
    return ans;
};