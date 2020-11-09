-- leetcode sql qs

-- 627 swap salary
UPDATE salary SET sex = case WHEN sex = 'm' then 'f' when sex = 'f' then 'm' end WHERE sex in ('m', 'f');
