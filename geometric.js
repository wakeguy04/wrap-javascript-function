const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const apmRootPath = path.join(repositoryRootPath, 'apm');