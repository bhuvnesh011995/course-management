// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//     .table-wrapper{
//     maxx-height:100px;
//     }
//         .table-container {
//             display: flex;
//         }

//         .table-wrapper {
//             width: 100%;
//             overflow-x: auto;
//         }

//         table {
//             width: 100%;
//             border-collapse: collapse;
//         }

//         th, td {
//             border: 1px solid #dddddd;
//             text-align: left;
//             padding: 8px;
//         }

//         th {
//             background-color: #f2f2f2;
//         }

//         /* Style for the three categories */
//         .category1, .category2, .category3 {
//             height: 40px; /* Fixed height for category rows */
//             overflow: hidden;
//         }

//         .category1 {
//             background-color: #ffcccc;
//         }

//         .category2 {
//             background-color: #ccffcc;
//         }

//         .category3 {
//             background-color: #ccccff;
//         }

//         /* Category row content */
//         .category-content {
//             display: inline-block;
//             vertical-align: top;
//             max-height: 100%;
//             overflow-y: auto;
//         }
//         .fixed-height-50 {
//             height: 50px;
//     max-height: 50px;
//     overflow-y: auto;
//     display: block;
// }

//         /* Sticky header */
//         thead {
//             position: sticky;
//             top: 0;
//             z-index: 1;
//         }

//         /* Hide additional rows by default */
//         .hidden-row {
//             display: none;
//         }

//         /* Show More/Show Less button styling */
//         .show-more {
//             cursor: pointer;
//             color: blue;
//             text-decoration: underline;
//         }
//     </style>
// </head>
// <body>

export const Table = () => {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <div className="table-wrapper"></div>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody className="fixed-height-50">
            {/* Category 1 Rows */}
            <tr className="category1">
              <td colSpan={3}>
                <div className="category-content">Category 1</div>
              </td>
            </tr>
            <tr className="category1">
              <td>Category 1 Row 1</td>
              <td>Category 1 Row 1</td>
              <td>Category 1 Row 1</td>
            </tr>
            <tr className="category1">
              <td>Category 1 Row 2</td>
              <td>Category 1 Row 2</td>
              <td>Category 1 Row 2</td>
            </tr>
            <tr className="category1 hidden-row">
              <td>Category 1 Row 3</td>
              <td>Category 1 Row 3</td>
              <td>Category 1 Row 3</td>
            </tr>
            <tr className="category1 hidden-row">
              <td>Category 1 Row 4</td>
              <td>Category 1 Row 4</td>
              <td>Category 1 Row 4</td>
            </tr>
            <tr className="category1 hidden-row">
              <td>Category 1 Row 5</td>
              <td>Category 1 Row 5</td>
              <td>Category 1 Row 5</td>
            </tr>
            <tr className="category1">
              <td colSpan={3} className="show-more">
                Show More
              </td>
            </tr>
          </tbody>
          {/* Category 2 Rows */}
          <tbody>
            <tr className="category2">
              <td colSpan={3}>
                <div className="category-content">Category 2</div>
              </td>
            </tr>
            <tr className="category2">
              <td>Category 2 Row 1</td>
              <td>Category 2 Row 1</td>
              <td>Category 2 Row 1</td>
            </tr>
            <tr className="category2">
              <td>Category 2 Row 2</td>
              <td>Category 2 Row 2</td>
              <td>Category 2 Row 2</td>
            </tr>
            <tr className="category2 hidden-row">
              <td>Category 2 Row 3</td>
              <td>Category 2 Row 3</td>
              <td>Category 2 Row 3</td>
            </tr>
            <tr className="category2 hidden-row">
              <td>Category 2 Row 4</td>
              <td>Category 2 Row 4</td>
              <td>Category 2 Row 4</td>
            </tr>
            <tr className="category2 hidden-row">
              <td>Category 2 Row 5</td>
              <td>Category 2 Row 5</td>
              <td>Category 2 Row 5</td>
            </tr>
            <tr className="category2">
              <td colSpan={3} className="show-more">
                Show More
              </td>
            </tr>
            {/* Category 3 Rows */}
            <tr className="category3">
              <td colSpan={3}>
                <div className="category-content">Category 3</div>
              </td>
            </tr>
            <tr className="category3">
              <td>Category 3 Row 1</td>
              <td>Category 3 Row 1</td>
              <td>Category 3 Row 1</td>
            </tr>
            <tr className="category3">
              <td>Category 3 Row 2</td>
              <td>Category 3 Row 2</td>
              <td>Category 3 Row 2</td>
            </tr>
            <tr className="category3 hidden-row">
              <td>Category 3 Row 3</td>
              <td>Category 3 Row 3</td>
              <td>Category 3 Row 3</td>
            </tr>
            <tr className="category3 hidden-row">
              <td>Category 3 Row 4</td>
              <td>Category 3 Row 4</td>
              <td>Category 3 Row 4</td>
            </tr>
            <tr className="category3 hidden-row">
              <td>Category 3 Row 5</td>
              <td>Category 3 Row 5</td>
              <td>Category 3 Row 5</td>
            </tr>
            <tr className="category3">
              <td colSpan={3} className="show-more">
                Show More
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
// </div>

// <script>
//     // Function to toggle visibility of additional rows and change button label
//     function toggleRows(category) {
//         const rows = document.querySelectorAll(`.${category}.hidden-row`);
//         const showMoreCell = document.querySelector(`.${category}.show-more`);
//         let anyHiddenRowsShown = false; // Flag to track if any hidden rows are shown

//         rows.forEach(row => {
//             if (row.style.display === 'none' || row.style.display === '') {
//                 row.style.display = 'table-row';
//                 anyHiddenRowsShown = true;
//             } else {
//                 row.style.display = 'none';
//             }
//         });

//         // Update the button label based on hidden rows visibility
//         showMoreCell.textContent = anyHiddenRowsShown ? 'Show Less' : 'Show More';
//     }

//     // Add click event listeners to "Show More/Show Less" cells
//     document.querySelectorAll('.show-more').forEach(showMore => {
//         showMore.addEventListener('click', () => {
//             const category = showMore.parentElement.classList[0];
//             toggleRows(category);
//         });
//     });
// </script>

// </body>
// </html>
