import React from 'react';

const Builds = () => {
  return (
    <section>
      <h2 className='heading-section'>Builds</h2>

      <form className='form-sci-fi mb-small'>
        <input
          type='text'
          className='form-sci-fi__input'
          placeholder='Search Builds'
        />
        <select defaultValue='Sort Builds'>
          <option disabled value='Sort Builds'>
            Sort Builds
          </option>
          <option value='By Upvotes'>By Upvotes</option>
          <option value='Newest First'>Newest First</option>
          <option value='Oldest First'>Oldest First</option>
        </select>
        <select defaultValue='All Time'>
          <option value='All Time'>All Time</option>
          <option value='Last 3 Days'>Last 3 Days</option>
          <option value='Last 7 Days'>Last 7 Days</option>
          <option value='Last 30 Days'>Last 30 Days</option>
        </select>
        <input type='submit' value='Search' />
      </form>

      <table className='table'>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Upvotes</th>
          <th>Created</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </section>
  );
};

export default Builds;
