// Main LALOLab help
HELPcontent["LALOLab"] = ["Welcome", "Welcome", "LALOLab:\n the Linear ALgebra Online Lab", "Look at the simple example below to get started or browse through the help topics on the right. ", "A = [ [1,2] ; [3,4] ; [5,6] ]  // define a matrix\nb = [3; -0.2; 5]  // define a (column) vector\nx = A \\ b // solve the linear system\nplot( A*x - b )  // plot the error"];

HELPcontent["LALOLib"] = ["Welcome", "Using LALOLib in web apps", "LALOLib:\n a library for linear algebra online", "All functions available in LALOLab are implemented in the stand-alone library LALOLib. This library should make it easy to develop scientific/numerical web applications.<br>LALOLab can be used to prototype/test a script and then translate it to javascript code based on LALOLib.<br>Alternatively, stand-alone HTML pages can be created from scripts. In this case, the output of computations can be displayed with the print() command. For instance, copy the example below to the multi-line input and click on the \"HTML code\" button. This generates HTML code that can be copied to a file (say test.html) to produce a stand-alone web page.<br><br>See also <a target='_blank' href='lalolib.html'>how to use LALOLib?</a> ", "A = rand(5,3)\nprint(\"A = \")\nprint(A)\nx = rand(3)\nprint(\"x = \")\nprint(x)\nprint(\"Ax = \")\nprint(A*x)\nplot(randn(30), \"b\", \"random values\")"];

// Operators
HELPcontent["[ ] (get,set)"] = ["Basics", "Matrix notations", "a = [a1; a2;...]\nA = [ [a11, a12]; [a21, a22] ]\n\nai = a[i] = get(a, i)\naij = A[i,j] = A[i][j]\naij = get(A, i, j)\n\nA[i,j] = x\nset(A, i, j, x)", "Square brackets are used to create a matrix/vector or access its entries with indexes starting at 0. Matrices are created (and stored) rowwise. See also 'mat' for matrix concatenation.<br>Ranges (with the notation ':') can be used to access multiple entries inside a " + htmlmatrix + " or " + htmlvector + ". Elements of a matrix can be indexed either with a comma between the rows and columns indexes or with two pairs of brackets."];
HELPcontent[": (range)"] = ["Basics", "Index ranges","idx = 0:n\nidx = range(n)\nidx = a:b\nidx = range(a,b)\nidx = a:inc:b\nidx = range(a,b,inc)\nrange()","Return a range of indexes as a vector of integers between a and b including a but not b. <br>The increment 'inc' defaults to 1 (or -1 if a > b). <br>In accessing matrix entries, [:] or range() can be used to extract a full row or column.", "A=rand(10,10)\nprint( A[0:2,0:3] ) // yields a 2x3 submatrix\nprint( A[:,5] ) // yields an entire column\ncountdown = 5:-1"];
HELPcontent["+ (add)"] = ["Basics", "Addition","C = A + B\nC = add(A,B)","A and B can be numbers, vectors or matrices."];
HELPcontent["- (sub)"] = ["Basics", "Substraction","C = A - B\nC = sub(A,B)","A and B can be numbers, vectors or matrices."];
HELPcontent["* (mul)"] = ["Basics", "Multiplication","C = A * B\nC = mul(A,B)","Generic number/vector/matrix multiplication. Let A and B be matrices,  a and b be (column) vectors and s a scalar. Then, <br><br>A*B and A*b are matrix multiplications, <br><br>a*b is a dot product equivalent to the matrix multiplication a'*b (a' is a single-row matrix and not a vector),<br><br>A*s, s*A, a*s, s*a are entry-wise scalar multiplications."];
HELPcontent[".* (entrywisemul)"] = ["Basics", "Entry-wise multiplication","C = A .* B\nC = entrywisemul(A,B)","A and B can be numbers, vectors or matrices but must be of the same size."];
HELPcontent["./ (entrywisediv)"] = ["Basics", "Entry-wise division","C = A ./ B\nC = entrywisediv(A,B)","A and B can be numbers, vectors or matrices but must be of the same size."];
HELPcontent["^ (pow)"] = ["Basics", "Power","C = A^B","Return A to the power B computed entrywise. Thus, if A is a matrix, A^2 is not A*A but A.*A. "];
HELPcontent["' (transpose)"] = ["Basics", "Matrix transpose","B = A'\nB = transpose(A)","Compute the transpose of A."];
HELPcontent["\\ (solve)"] = ["Basics","Solve a linear system of equations", "x = A \\ b\nx = solve( A, b )", "If A is square, solve Ax = b using Gaussian elimination. Otherwise, this computes the minimizer of ||Ax - b|| using QR factorization. ", "x = randn(10)\nA = randn(10,10)\nb = A*x + 0.01*randn(10)\nxhat = solve(A,b)\nerr = norm(x - xhat)"];

// Logical operators
HELPcontent["== (isEqual)"] = ["Basics", "Equality test","C = (A == B)\n","Return a vector/matrix C of same size as A with entries Cij=1 if Aij=Bij and 0 otherwise. B must have same size as A or be a number."];
HELPcontent["!= (isNotEqual)"] = ["Basics", "Not equal test","C = (A != B)\n","Return a vector/matrix C of same size as A with entries Cij=0 if Aij=Bij and 1 otherwise. B must have same size as A or be a number."];
HELPcontent["> (isGreater)"] = ["Basics", "Inequality test","C = (A > B)\n","Return a vector/matrix C of same size as A with entries Cij=1 if Aij>Bij and 0 otherwise. B must have same size as A or be a number."];
HELPcontent[">= (isGreaterOrEqual)"] = ["Basics", "Inequality test","C = (A >= B)\n","Return a vector/matrix C of same size as A with entries Cij=1 if Aij>=Bij and 0 otherwise. B must have same size as A or be a number."];
HELPcontent["< (isLower)"] = ["Basics", "Inequality test","C = (A < B)\n","Return a vector/matrix C of same size as A with entries Cij=1 if Aij<Bij and 0 otherwise. B must have same size as A or be a number."];
HELPcontent[">= (isLowerOrEqual)"] = ["Basics", "Inequality test","C = (A <= B)\n","Return a vector/matrix C of same size as A with entries Cij=1 if Aij<=Bij and 0 otherwise. B must have same size as A or be a number."];

// Matrix generation 
HELPcontent["size"] = ["Basics", "Size of a matrix/vector","s = size(A)\nm = size(A, 1)\nn = size(A, 2)","Return the size of a matrix/vector as a vector s = [m, n] or simply the number of rows m or of columns n."];
HELPcontent["type"] = ["Basics", "Type of an object","tx = type(x)","Return a string indicating the type of an object: \"number\", \"vector\", \"matrix\", \"string\", \"object\" or \"function\"."];
HELPcontent["zeros"] = ["Basics", "Zero matrix/vector","v = zeros(n)\nA = zeros(m,n)","Generate an n-dimensional vector v or m-by-n matrix A filled with zeros."];
HELPcontent["ones"] = ["Basics", "Matrix/vector of 1","v = ones(n)\nA = ones(m,n)","Generate an n-dimensional vector v or an m-by-n matrix A filled with ones."];
HELPcontent["eye"] = ["Basics", "Identity matrix","I = eye(n)\n","Return the n-by-n identity matrix."];
HELPcontent["mat"] = ["Basics", "Matrix concatenation","C = [A, B, ...]\n<span style='font-weight:normal;'>{ C = mat([A, B, ...]) } </span>\nC = [A; B; ...]\n<span style='font-weight:normal;'>{ C = mat([A, B, ...], true) } </span>\nv = mat( array )\nM = mat( array2D )","Concatenate matrices and vectors column-wise if separated with commas or row-wise if separated with semicolons (or if calling mat() with the second set to true). In the row-wise case, vectors are automatically transposed.<br>If array is a javascript Array of numbers, mat( array ) returns a column vector with the same entries. If array2D is a javascript Array of Arrays, mat( array2D ) returns a matrix M with M[i,j] = array2D[i][j].","x1 = [1,2,3]\nx2 = [4,5,6]\nX = [x1; x2]"];
HELPcontent["diag"] = ["Basics", "Matrix diagonal","d = diag( A )\nD = diag( v )","Return the diagonal d of a matrix A or a diagonal matrix D with entries from a vector v."];
HELPcontent["triu"] = ["Basics", "Upper triangular part","U = triu( A )","Extract the upper triangular part of a matrix."];
HELPcontent["tril"] = ["Basics", "Lower triangular part","L = tril( A )","Extract the lower triangular part of a matrix."];
HELPcontent["xtx"] = ["Basics", "Faster X'X","xtx(X)\n","Compute X'*X a bit faster than X'*X. "];
HELPcontent["vec"] =  ["Basics", "Matrix vectorization","v = vec( A )","Return a vector v containing all entries of a matrix A read row-wise, such that v[i*A.n + j] = A[i,j].<br>Note: vec(A) returns a copy of the entries of A, whereas A.val is a reference to its vector of entries. "];
HELPcontent["reshape"] =  ["Basics", "Reshape dimensions","B = reshape( A, m, n )","Return a reshaped matrix (for n > 1) or vector (for n = 1) with m rows and n columns by reading the entries of A rowwise and storing them in B rowwise. ", ["a = 0:12 // a is a vector\nA = reshape(a, 3, 4) // returns a matrix", "a = 0:12\nA = reshape(a, 3,4)\nB = reshape(A, 6, 2)"] ];
HELPcontent["swaprows"] =  ["Basics", "Swap rows of a matrix","swaprows( A, i, j )","Swap rows i and j in the matrix A."];
HELPcontent["swapcols"] =  ["Basics", "Swap columns of a matrix","swapcols( A, i, j )","Swap columns i and j in the matrix A."];
HELPcontent["supp"] = ["Basics", "Support of a vector","indexes = supp( x )","Return a list of indexes corresponding to the support of x."];

// Sparse
HELPcontent["sparse"] = ["Basics", "Sparse matrix/vector","A = sparse( X )\nA = sparse( X, rowmajor )\nb = sparse( x )","Return a sparse matrix or vector of \"spmatrix\" or \"spvector\" type such that full( sparse( X ) ) = X. By default sparse matrices are stored in row major (or row compressed) format, use sparse ( X, false ) for column major format.  "];
HELPcontent["full"] = ["Basics", "Full matrix/vector","X = full( A )\nx = full( b )","Return a full matrix or vector of \"matrix\" or \"vector\" type such that sparse( full( A ) ) = A. "];


// Who / Delete
HELPcontent["who"] = ["Basics", "List of variables","who()","Prints the list of variables in the workspace."];
HELPcontent["delete"] = ["Basics", "Delete a variable","delete(x)","Deletes the variable x from the workspace."];

// Find 
HELPcontent["find"] = ["Basics", "Find indexes","find( b )","Return a list of indexes (as a vector of integers) corresponding to the nonzero entries in b. If b is a boolean expression, then this yields the indexes for which the expression is true.", "x = randn(10)\nidx = find( x > 0 )"];
HELPcontent["min"] = ["Basics", "Minimum","min(X, d)","Return the minimum among all entries in X (without d) or a vector of minima among its columns (if d=1) or rows (if d=2)."];
HELPcontent["max"] = ["Basics", "Maximum","max(X, d)","Return the maximum among all entries in X (without d) or a vector of maxima among its columns (if d=1) or rows (if d=2)."];
HELPcontent["findmin/argmin"] = ["Basics", "Index of the minimum", "findmin(x)\nargmin(x)","Return the (smallest) index of the minimum in a vector."];
HELPcontent["findmax/argmax"] = ["Basics", "Index of the maximum", "findmax(x)\nargmax(x)","Return the (smallest) index of the maximum in a vector."];
HELPcontent["sort"] = ["Basics", "Sort a vector", "sort(x)\nsort(x,dec)\nsort(x,dec,returnIdx)","sort(x) returns a vector with values of x in increasing (or decreasing if dec is true) order.<br> If the third argument is true, sort returns the sorted list of indexes and stores the sorted x in place of the original one."];



// Norms & reductions
HELPcontent["sum"] = ["Basics", "Summation","sum(X)\nsum(X,d)","Sum all entries in X or only along the dimension d to produce a vector. ", "X = [[1,2];[3,4]]\nsum(X,2) // sum the rows and return a vector"];
HELPcontent["prod"] = ["Basics", "Product","prod(X)\nprod(X,d)","Compute the product of all entries in X or only along the dimension d to produce a vector. ", "X = [[1,2];[3,4]]\nprod(X,2) // vector of product of rows"];
HELPcontent["trace"] = ["Basics", "Trace of a matrix","trace( A )","Compute the trace of the square matrix A as the sum of its diagonal entries."];
HELPcontent["det"] = ["Basics", "Determinant of a matrix","det( A )","Compute the determinant of the square matrix A."];
HELPcontent["norm"] = ["Basics", "Euclidean/Frobenius norm","norm(X)\nnorm(X,d)\nnorm(x)","Compute the Frobenius norm of the matrix X or the Euclidean norms of its columns/rows.<br> If x is a vector, norm(x) is its Euclidean norm."];
HELPcontent["norm1"] = ["Basics", "l1-norm","norm1(X)\nnorm1(X,d)\nnorm1(x)","Compute the l1-norm of a matrix, of its columns (if d=1), of its rows (if d=2), or of a vector. "];
HELPcontent["norminf"] = ["Basics", "l_inf/max-norm","norminf(X)\nnorminf(X,d)\nnorminf(x)","Compute the max-norm of a matrix, of its columns (if d=1), of its rows (if d=2), or the l_inf-norm of a vector (the maximal absolute value). "];
HELPcontent["norm0"] = ["Basics", "l0-pseudo-norm","norm0(X)\nnorm0(X,d)\nnorm0(x)","Compute the l0-pseudo-norm of (i.e., the number of nonzero entries in) a matrix, of its columns (if d=1), of its rows (if d=2), or of a vector. "];
HELPcontent["normp"] = ["Basics", "lp-norm","normp(X, p)\nnormp(X, p, d)\nnormp(x, p)","Compute the lp-norm of a matrix, of its columns (if d=1), of its rows (if d=2), or the lp-norm of a vector. "];
HELPcontent["normnuc"] = ["Basics", "Nuclear norm","normnuc(X)","Compute the nuclear norm of a matrix as the sum of its singular values. "];

// Linear systems
HELPcontent["solve"] = ["Basics","Solve a linear system of equations", "x = solve( A, b )", "Solve the linear system Ax = b by QR factorization with column pivoting.<br> If A has more rows than columns, this yields the least squares solution minimizing ||Ax - b||. If the system is underdetermined, this yields a basic solution with no more than rank(A) nonzeros.", "x = randn(10)\nA = randn(10,10)\nb = A*x + 0.01*randn(10)\nxhat = solve(A,b)\nerr = norm(x - xhat)"];
HELPcontent["solvecg"] = ["Basics","Conjugate gradient method", "x = solvecg( A, b )", "Solve the linear system Ax = b with symmetric and positive definite A by the conjugate gradient method. <br> Use cgnr(A,b) to solve overdetermined least squares problems. ", "x = randn(10)\nA = randn(10,10)\nb = A'*A*x + 0.01*randn(10)\nxhat = solvecg(A'*A,b)\nerr = norm(x - xhat)"];
HELPcontent["cgnr"] = ["Basics","Conjugate gradient normal equation residual method", "x = cgnr( A, b )", "Solve the least square problem, min ||Ax - b||, with A.m > A.n by the conjugate gradient normal equation residual method. ", "x = randn(1000)\nA = randn(10000,1000)\nb = A*x + 0.01*randn(10000)\nxhat = cgnr(A,b)\nerr = norm(x - xhat)"];
HELPcontent["inv"] = ["Basics","Matrix inverse", "inv( A )", "Compute the matrix inverse of A or return \"singular\".", "A = [ [1, -2], [-2, 1] ]\nAinv = inv(A)\nI = A * Ainv"];
HELPcontent["eig"] = ["Basics","Eigenvalue decomposition", "v = eig( A )\nE = eig( A, true )", "eig( A ) computes the eigenvalues of A. <br>eig( A, true ) returns both the eigenvalues (in E.V) and the eigenvectors (in E.U) in the eigendecomposition A = E.U * diag(E.V) * E.U'.<br>NOTE: only implemented for symmetric A.", "//Symmetric eigenvalue decomposition\nX = rand(3,3)\nA = X*X'\nE = eig(A, true)\nnorm(E.U * diag(E.V) * E.U' - A)"];
HELPcontent["eigs"] = ["Basics","Few eigenvalues and eigenvectors", "eigs( A )\neigs( A , k)\neigs( A , k , \"smallest\")", "eigs( A ) computes the eigenvalue with largest magnitude and the corresponding eigenvector of A using the power method. <br>eigs( A, k ) computes the k such eigenvalue-eigenvector pairs with orthogonal iterations.<br>eigs( A , k , \"smallest\") computes the k eigenpairs with eigenvalues closest to 0 by inverse orthogonal iterations. If the eigenvalues of A are positive, this yields the smallest eigenvalues."];

// Factorizations
HELPcontent["rank"] = ["Basics", "rank","rank(X)","Compute the numerical rank of X by thresholding singular values below 1e-10. ", "X = rand(6,3)\nr = rank(X*X')  // should return 3 "];
HELPcontent["chol"] = ["Basics", "Cholesky factorization","G = chol(X)","Return the lower triangular matrix G in the Cholesky factorization X = G*G' of a symmetric and positive definite X.<br> If X is not positive-definte, chol(X) is undefined, which evaluates to false in tests.", ["R=rand(3,3)\nX = R'*R\nG = chol(X)\ne = norm(G*G' - X)", "X = rand(5,5)\nif ( ! chol(X) ) { \n \"X is not positive definite\"\n}\n"] ];
HELPcontent["cholsolve"] = ["Basics", "Positive definite linear system","x = cholsolve(L,b)","Solve the square linear system Ax = b with a positive definite matrix A given its lower triangular Cholseky factor L such that LL' = A." ];
HELPcontent["qr"] = ["Basics", "QR factorization","QR = qr(X, computeQ)","Compute the QR factorization with column pivoting XP = QR. The result is an object in which QR.Q is the orthonormal Q (if computeQ is true), QR.R is the upper triangular R, QR.rank is an estimate of rank(X), QR.piv is a list of permutations indexes defining the permutation matrix P and QR.V and QR.beta are lists of householder vectors and constants used to represent Q in factored form when computeQ is false."];
HELPcontent["svd"] = ["Basics", "Singular value decomposition","svd(X)\nsvd(X,\"full\") = svd(X,true)\nsvd(X,\"thin\")\nsvd(X,\"U\")\nsvd(X,\"thinU\")\nsvd(X,\"V\")","svd(X) computes the singular values of an m-by-n X. With a second argument, (parts of) the full or thin singular value decomposition X = USV' is computed. For instance, svd(X, \"thinU\") only computes U and S in the thin SVD of X.", "X = rand(6,3)\nsvdX = svd(X, \"full\")\nsingularvalues = svdX.s\nnorm(X - svdX.U * svdX.S * svdX.V')"];
HELPcontent["nullspace"] = ["Basics", "Null space","nullspace(X)","Compute an orthonormal basis for the null space (kernel) of X."];
HELPcontent["orth"] = ["Basics", "Range of a matrix","orth(X)","Compute an orthonormal basis for the range of X."];

// Basic math functions
HELPcontent["apply"] = ["Basics", "Apply a function entrywise","Y = apply(f, X)","Return a matrix/vector Y of the same size as X with entries Y[i,j] = f( X[i,j] ). "];
HELPcontent["math functions"] = ["Basics", "Basic math functions","Y = f( X )","Return a matrix/vector Y of the same size as X with entries Y[i,j] = f( X[i,j] ) where f is any of the following basic math functions:<br>abs, acos, asin, atan, atan2, ceil, cos, exp, floor, log, round, sign, sin, sqrt, log10, log2, cosh, sinh, tanh, acosh, asinh, atanh."];



// Plots
HELPcontent["plot"] = ["Plots", "Plot","plot(y)\nplot(x,y)\nplot(X)\nplot(..,\"style\",\"legend\")\nplot(..,\"style\",..,\"style\")","plot(x,y) plots the set of points of coordinates (x[i],y[i]).<br>plot(y) uses x=0:y.length.<br>plot(X) is equivalent to plot(X[:,0], X[:,1]) if X has two columns and otherwise plots one curve for each row in X.<br>Multiple curves can be plotted by appending the corresponding arguments.<br>The style string can include a color and a dot (for scatter plot without line) or an underscore (for lines without dots). ", "x = -3:0.1:3\nplot(x,sin(PI*x),\"g\",\"sin(x)\",x,sin(PI*x)./(PI*x),\".r\",\"sinc(x) samples\")"];
HELPcontent["colorplot"] = ["Plots", "Color plot","colorplot(x,y,z)\ncolorplot(X,y)\ncolorplot(X)","colorplot(x,y,z) plots the set of points of 2D coordinates (x[i],y[i]) with color z[i].<br>colorplot(X,y) is equivalent to colorplot(X[:,0], X[:,1], y) and colorplot(X) is equivalent to colorplot(X[:,0], X[:,1], X[:,2]).", "colorplot(rand(50,3))" ];
HELPcontent["plot3"] = ["Plots", "3D plot","plot3(x,y,z)\nplot3(X)\nplot3(X1,\"style\",\"legend\",X2,\"style\",\"legend\",...)","plo3t(x,y,z) plots the set of points of coordinates (x[i],y[i],z[i]).<br>plot3(X) is equivalent to plot3(X[:,0], X[:,1], X[:,2]).<br>Multiple curves can be plotted by appending the corresponding arguments.<br>The style string can include a color and an underscore (for lines without dots). ", "x=12*rand(100)-6\ny=12*rand(100)-6\nz = 5*sin(x) + y\nplot3(x,y,z)"];
HELPcontent["image"] = ["Plots", "Image view of a matrix","image(X)\nimage(X, title)","Plot the matrix X as an image, i.e., as a colormap of its entries.", "X = rand(20,20)\nimage(X,\"A random image\")"];

// Programming (javascript standards)
HELPcontent["for"] = ["Programming", "FOR loop","for ( init ; cond ; inc) {\n" + htmltab + "...\n}","Standard FOR loop following the Javascript notation.","x=zeros(10)\nfor ( i=1; i < 10; i++) {\n   x[i] = x[i-1] + 1\n}"];
HELPcontent["while"] = ["Programming", "WHILE loop","while ( condition ) {\n" + htmltab + "...\n}","Standard WHILE loop following the Javascript notation."];
HELPcontent["do - while"] = ["Programming", "DO - WHILE loop","do {\n" + htmltab + "...\n} while( condition );","Standard DO-WHILE loop following the Javascript notation."];
HELPcontent["function"] = ["Programming", "Functions","function f(x) {\n" + htmltab + "var y\n"+ htmltab + "...\n" + htmltab + "return y\n} ","Create a function named f of argument x and which returns y. <br>Local variables must be declared with \"var\", otherwise they will be treated as global variables.<br>The return statement should not include operations outside of brackets: 'return 2*x' yields an error, but 'return (2*x)' is correct.", "function f( x ) {\n   return (norm(x)^2) \n}\nf( [ 1, 1 ] ) // should be 2"];
//HELPcontent["importScripts"] = ["Programming", "Import javascript code","importScripts(\"module.js\")", "Import a javascript module, giving access to all its global variables and functions."];
HELPcontent["tic / toc"] = ["Programming", "Timing functions","tic()\n...\nelapsedTime = toc()", "tic() and toc() can be used to time a function or script. toc() returns the elpased time (in seconds) since the last call to tic().","tic()\nrandn(10000,100)*rand(100)\nelapsedTime = toc()"];
HELPcontent["error"] = ["Programming", "Error message","error(\"error message\")\n", "Throw an Error with the corresponding message, interrupting the execution. "];

HELPcontent["javascript"] = ["Programming", "Plain Javascript","{ javascript code; }", "Plain javascript can be embedded in scripts by surrounding javascript lines with braces. The javascript lines must include a semi-colon.<br><br>See the <a href='lalolib.html#datatypes'>implementation details</a> on data types to know how to use these directly.", "a = ones(5)\na[1] = a[1] + 1  // LALOLab code\n{ a[2] += 2 ; } // javascript code \n"];

// Statistics
HELPcontent["mean"] = ["Statistics", "Mean","mean(X)\nmean(X,d)","Compute the mean of all entries in X or only along the dimension d to produce a vector. ", "X = [[1,2];[3,4]]\nmean(X,2) // return the means of each row in a vector"];
HELPcontent["variance"] = ["Statistics", "Variance","variance(X)\nvariance(X,d)","Compute the variance of all entries in X or only along the dimension d to produce a vector. ", "X = randn(100,2)\nvariance(X,1) // return the variance of each column in a vector"];
HELPcontent["std"] = ["Statistics", "Standard deviation","std(X)\nstd(X,d)","Compute the standard deviation of all entries in X or only along the dimension d to produce a vector. ", "X = randn(100,2)\nstd(X,1) // return the std of each column in a vector"];
HELPcontent["cov"] = ["Statistics", "Covariance matrix","C = cov(X)\n","Compute the covariance matrix C of the columns of X. ", "X = randn(100,3)\nC = cov(X)"];
HELPcontent["rand"] = ["Statistics", "Uniformly random matrix/vector","v = rand(n)\nA = rand(m,n)","Generate a random n-dimensional vector v or m-by-n matrix A with uniformly distributed entries in [0,1]."];
HELPcontent["randn"] = ["Statistics", "Gaussian matrix/vector","v = randn(n)\nA = randn(m,n)","Generate a random n-dimensional vector v or m-by-n matrix A with normally distributed entries (mean=0, std=1)."];
HELPcontent["randsparse"] = ["Statistics", "Uniformly random sparse matrix/vector","v = randsparse(s,n)\nA = randsparse(s,m,n)","Generate a sparse n-dimensional vector v or m-by-n matrix A with s (or s*m*n if s < 1) uniformly distributed entries in [0,1]. <br>NOTE: randsparse() returns a full matrix with zeros, use sparse(randsparse(...)) to obtain a sparse matrix of \"spmatrix\" type."];
HELPcontent["randnsparse"] = ["Statistics", "Sparse Gaussian matrix/vector","v = randnsparse(n)\nA = randnsparse(m,n)","Generate a sparse n-dimensional vector v or m-by-n matrix A with s (or s*m*n if s < 1) normally distributed entries (mean=0, std=1). <br>NOTE: randnsparse() returns a full matrix with zeros, use sparse(randnsparse(...)) to obtain a sparse matrix of \"spmatrix\" type."];
HELPcontent["randperm"] = ["Statistics", "Random permutation","p = randperm( x )\np = randperm ( N )","Return a random permutation of a vector x or of the index list 0:N."];
HELPcontent["mvnrnd"] = ["Statistics", "Multivariate normal random numbers","X = mvnrnd(mu, Sigma, N)\n","Generate N random vectors as rows in X according to a multivariate normal distribution of mean mu and covariance matrix Sigma. A lower triangular matrix L such that Sigma = L*L' can be provided instead of Sigma to avoid computing the cholseky factorization of sigma at every call of mvnrnd.", "Sigma = [[1, 0.7]; [0.7,3]]\nX = mvnrnd([1,2],Sigma, 500)\nplot(X,\".\")\ncov(X)  // should be close to Sigma"];
HELPcontent["nchoosek"] = ["Statistics", "Binomial coefficient","nchoosek(n, k)","Return the number of combinations of k items taken among n, i.e., n!/k!(n-k)! ."];

HELPcontent["<strong>Distribution</strong>"] = ["Statistics", "Distributions","P = new Distribution( name, arg1, arg2)\nx = P.sample()\nX = P.sample(N)\np = P.pdf(x)\nP.estimate(X)\nP.info()\nP.mean\nP.variance\nP.std","Create a new distribution. 'name' can be Uniform, Gaussian, Bernoulli. arg1 and arg2 depend on the name as detailed in the corresponding help sections.<br>Any distribution has fields P.mean, P.variance and P.std. <br>Any distribution can be estimated from a set of points stored as rows in X with P.estimate(X) or sampled with P.sample(N). Values of the probability density (or mass) function can be retrieved with P.pdf(x). "]; 
HELPcontent["Uniform"] = ["Statistics", "Uniform distribution","P = new Distribution( Uniform, N)\nP = new Distribution( Uniform, [x1,x2...])\nP = new Distribution( Uniform, a, b)","Create a uniform distribution over the N first integers, the integers [x1, x2...], or the reals within the interval [a,b] (where a and b can be numbers or vectors). ", ["// Roll of a die\nD = new Distribution(Uniform, 1:7)\nplot(D.sample(10),\".\",\"sample of die values\" )\nD.info()", "// Continuous distribution\nU = new Distribution(Uniform, -1, 1)\nX = U.sample(50)\nUhat = new Distribution(Uniform)\nUhat.estimate(X)\nr=-2:0.1:2\nplot(X,zeros(50),\".\",\"samples\",r,U.pdf(r),\"g_\",\"pdf\",r,Uhat.pdf(r),\"r_\",\"estimated pdf\")\nUhat.info()" ] ]; 
HELPcontent["Gaussian"] = ["Statistics", "Gaussian distribution","P = new Distribution( Gaussian, mean, variance)\n","Create a Gaussian distribution. By default, mean = variance = 1. If mean is a vector, the distribution is a multivariate Gaussian with independent components and variance should be a vector of same length. ", ["P = new Distribution (Gaussian, 0, 3)\nX = P.sample(50)\nPhat = new Distribution(Gaussian)\nPhat.estimate(X)\nr = -5:0.2:5\nplot(X, zeros(50), \".\", \"samples\",r, P.pdf(r),\"g_\",\"pdf\",r,Phat.pdf(r),\"r_\",\"estimated pdf\")", "// multivariate Gaussian with independent components\nP = new Distribution (Gaussian, [0;1], [1;4])\nX = P.sample(100)\nplot(X,\".\",\"samples\")\np = P.pdf(X)\nplot3([X,50*p]) // plot pdf"]]; 
HELPcontent["mvGaussian"] = ["Statistics", "Multivariate Gaussian distribution","P = new Distribution( mvGaussian, mu, Sigma)\n","Create a multivariate Gaussian distribution of mean mu and covariance matrix Sigma. ", "mu = [1;2]\nSigma = [[1, 0.7]; [0.7,3]]\nP = new Distribution (mvGaussian, mu, Sigma)\nX = P.sample(100)\nplot3([X, 50*P.pdf(X)])"]; 
HELPcontent["Bernoulli"] = ["Statistics", "Bernoulli distribution","P = new Distribution( Bernoulli, p)\n","Create a Bernoulli distribution with parameter p which defaults to 0.5. If p is a vector, then P is a multi-dimensional distribution with independent Bernoulli components. ", "P = new Distribution (Bernoulli, 0.3)\nX = P.sample(50)\nPhat = new Distribution(Bernoulli)\nPhat.estimate(X)\nPhat.info()"]; 
HELPcontent["Poisson"] = ["Statistics", "Poisson distribution","P = new Distribution( Poisson, lambda)\n","Create a Poisson distribution with integer parameter lambda which defaults to 5. If lambda is a vector, then P is a multi-dimensional distribution with independent Poisson components. ", "P = new Distribution (Poisson, 4)\nX = P.sample(50)\nPhat = new Distribution(Poisson)\nPhat.estimate(X)\nPhat.info()\nr=1:20\nplot(X,zeros(50),\".\",\"samples\",r,P.pmf(r),\"g.\",\"pmf\",r,Phat.pmf(r),\"r.\",\"estimated pmf\")\n"]; 


// Optimization
HELPcontent["lp"] = ["Optimization", "Linear programming","x = lp(c, A, b, Aeq, beq, lb, ub, integers)\nx = linprog(...)","Solve the linear program \\begin{align}\\min_{lb\\leq x\\leq ub}\\ &c^T x ,\\\\ s.t.\\ & Ax\\leq b,\\\\ & A_{eq} x = b_{eq}, \\\\ & x_{integers} \\in \\mathbb{Z} .\\end{align}", "A = [[3,2,1,1,0];[2,5,3,0,1]]\nb = [10;15]\nc = [-2;-3;-4;0;0]\nlb = zeros(5)\nxsol = lp(c, [],[],A, b,lb,[])\n// solution should be [0;0;5;5;0]"];
HELPcontent["qp"] = ["Optimization", "Quadratic programming","x = qp(Q, c, A, b, Aeq, beq, lb, ub)\nx = quadprog(...)","Solve the convex quadratic program \\begin{align}\\min_{lb\\leq x\\leq ub}\\ &\\frac{1}{2} x^T Qx + c^T x ,\\\\ s.t.\\ & Ax\\leq b,\\\\ & A_{eq} x = b_{eq}\\end{align} with the Frank-Wolfe algorithm.", "Q=[ [4, 1]; [1,2] ]\nc = [1;1]\nlb=[0;0]\nAeq=[1;1]'\nbeq=1\nx = qp(Q,c,[],[],Aeq,beq,lb) \n// solution should be [0.25; 0.75]"]; 
HELPcontent["minl1"] = ["Optimization", "l1-minimization","x = minl1( A, b )", "Compute the minimum l1-norm solution to the linear system Ax = b, i.e., solve $$\\min_{x} \\|x\\|_1 ,\\ s.t.\\ Ax=b$$", "//Basis pursuit sparse recovery\nA = randn(10,20)\nx = zeros(20)\nx[0:3] = randn(3)\nxhat = minl1(A,A*x)"];
HELPcontent["minl0"] = ["Optimization", "Bounded l0-minimization","x = minl0( A, b, M )", "Compute the sparsest solution within [-M,M]^n to the linear system Ax = b, i.e., solve $$\\min_{-M\\leq x\\leq M} \\|x\\|_0 ,\\ s.t.\\ Ax=b,$$ via the mixed-integer linear program \\begin{align}\\min_{x, \\beta} & \\beta^T 1 \\\\ s.t.\\ & Ax=b,\\\\ &  -M \\beta\\leq x \\leq M\\beta,\\\\& \\beta\\in\\{0,1\\}^n\\end{align}", "//Exact sparse recovery\nA = randn(10,20)\nx = zeros(20)\nx[0:3] = randn(3)\nxhat = minl0(A,A*x)"];
HELPcontent["minimize"] = ["Optimization", "Unconstrained minimization","x = minimize( f, grad )\nx = minimize( f, grad, n )\nx = minimize( f, grad, x0 )", "Compute the (local) minimizer of the objective function f(x) of gradient grad(x) using BFGS with polynomial line search (or the secant method if n=1 or steepest descent if n>500).<br>f and grad must be functions returning the objective value and the gradient vector, respectively. <br>n is the dimension of x (1 by default).<br> x0 is the initial point (random by default). Note that x0 cannot be a positive integer for one-dimensional problems. ", "function f(x) {\n  return (2*sum(x) + x'*x)\n}\nfunction grad(x) {\n  return (2 + 2*x)\n}\nx = minimize(f, grad, 5) // should be [-1;-1;-1;-1;-1]"];

