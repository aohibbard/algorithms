# 337 house robber III
# implement recursive depth first search on a tree
class Solution:
    def rob(self, root: TreeNode) -> int:
        def depth_first(node):
            if not node: return 0, 0
            # depth first serach
            left, right = depth_first(node.left), depth_first(node.right)
            # take greater value from even rows following from root
            # taken assumes you start with root and take from every other row
            taken = node.val + left[1] + right[1]
            # take the child rows from what you skip in this path
            not_taken = max(left) + max(right)
            # because you can only take from every other row, these are the only possibilities
            return taken, not_taken
            # return largest of 2 possibilites
        return max(depth_first(root))

# 22 Nov. 2020
# unique morse code strings
# given some strings in the alphabet, transform to Morse code, see which is unique
class Solution:
    def unique_morse_representations(self, words: List[str]) -> int:
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        abcs = list(string.ascii_lowercase)
        sol = []
        for word in words:
            new_word = ''
            for char in word:
                new_word += morse[abcs.index(char)]
            sol.append(new_word)
        return len(list(set(sol)))

# 242 valid anagram
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)

# 1318 string to 2 integers
class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        i = 1
        while '0' in str(n - i) or '0' in str(i):
            i += 1
        return [i, n - i]

# December 4
class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        if k == 1:
            return 1
        count = 1
        for i in range(2, n):
            if n % i == 0:
                count += 1
            if count == k:
                return i
        return (n if count+1==k else -1)

# jan 19 / number 5
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 1:
            return s
        res = ""
        longest = ""
        max_count = 0
        
        for i in range(len(s)):
            res = ""
            l, r = i, i+1
            while 0 <= l and r < len(s) and s[l] == s[r]:
                res = s[l] + res + s[r]
                l -= 1
                r += 1
            if len(res) > max_count:
                max_count = len(res)
                longest = res
        
        for i in range(len(s)):
            res = s[i]
            l, r = i - 1, i + 1
            while 0 <= l and r < len(s) and s[l] == s[r]:
                res = s[l] + res + s[r]
                l -= 1
                r += 1
            if len(res) > max_count:
                max_count = len(res)
                longest = res
        
        return longest