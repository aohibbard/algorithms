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