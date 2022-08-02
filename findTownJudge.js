// Questions: In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// 1. The town judge trusts nobody.
// 2. Everybody (except for the town judge) trusts the town judge.
// 3. There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// Example 1:

// Input: N = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
// Example 4:

// Input: N = 3, trust = [[1,2],[2,3]]
// Output: -1
// Example 5:

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3
// Constraints:

// 1 <= N <= 1000
// 0 <= trust.length <= 10^4
// trust[i].length == 2
// trust[i] are all different
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= N

// Solution
// The inputs are N as an integer and trust as a 2–D array.

// To better understand the relationship between town judge and everybody, we can draw out the example:

// Example 1:

// 1 has one-way connection to 2, and 2 doesn’t have connection with others. 2 doesn’t trust anyone, and everybody else trusts 2, so 2 is the town judge. It is a directed graph.

// Example 2:

// 1 and 2 both have one-way connection to 3, and 3 doesn’t have outgoing pointer connected to others. Which makes 3 the town judge.

// Example 3:

// 2 has one-way connection with 3, but 1 and 3 have two-way connection. There is no element that doesn’t trust no one, so we return -1.

// So to make things easy to understand, we can say we are trying to find the element, who doesn’t like anybody, but is being liked by N-1 persons in the town. How can we keep track of the number of times an element likes and being liked? We use hash.

// To calculate two different numbers of likes and being liked, we set the keys of hashes from 1 to N, so we wouldn’t miss any number. And we loop through the trust array to increment the count of likes and being liked according to the element order of the subarray. The code looks like the following.

const findJudge = (N, trust) => {
    // keep track of how many likes the element gives
    let likesCountList = {}
    //keep track of how many likes the element receives
    let beingLikedCountList = {}
    
    //hash the key from 1 to N
    for(let i = 1; i <= N; i++){
        likesCountList[i] = 0
        beingLikedCountList[i] = 0
    }
    
    //loop through trust to hash value to hashes
    for(let ele of trust){
        likesCountList[ele[0]]++
        beingLikedCountList[ele[1]]++
    }
    
    //variable to store potential judge
    
    let judge = 0
    //if the element doesn't give out any likes
    //it is the potantial judge
    for(key in likesCountList){
        if(likesCountList[key] === 0) judge = key
    }
    
    //if the potential judge receives likes from everybody other than itself
    //it means it is the judge
    //otherwise judge doesn't exist
    
    if(beingLikedCountList[judge] === N - 1) return judge
    else return -1
    
    
   
};


// The overall time complexity is O(n), and space complexity is O(n).

// I hope this gives you some ideas of how to solve the similar problem.