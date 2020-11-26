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
        