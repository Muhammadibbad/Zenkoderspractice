// function that takes a positive integer and returns the next smaller positive integer?






function nextSmaller(n) {
  
    const arr = ( n + '' ).split( '' ).map( Number );
  
    // Find longest non-decreasing suffix
    let i, prev = 9;
    for ( i = arr.length; i--; ) {
        if ( arr[ i ] > prev )
            break;
        prev = arr[ i ];
    }
  
    // If whole sequence is non-decreasing,
    // it is already the smallest permutation
    if ( i < 0 )
        return -1;
  
    const pivot_i = i;
    const pivot = arr[ pivot_i ];
  
    for ( i = arr.length; i--; ) {
        if ( arr[ i ] < pivot )
            break;
    }
  
    arr[ pivot_i ] = arr[ i ];
    arr[ i ] = pivot;

    if ( arr[ 0 ] === 0 )
        return -1;
  
    return +arr.slice( 0, pivot_i + 1 ).concat( arr.slice( pivot_i + 1 ).reverse( ) ).join('');
}
