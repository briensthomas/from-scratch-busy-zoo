import React from 'react';
import MaterialTable from 'material-table';
import { badguys } from './data';

export default function MyTable() {
  return (
    <div className='tables'>
      <MaterialTable 
        columns={
          [
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Catch Phrase', field: 'catch_phrase' },
            { title: 'Gender', field: 'gender' },
            { title: 'Spirit Animal', field: 'spirit_animal' },
          ]
        }
        data={badguys}
        title="Scooby Doo Villains"
        options={{
          headerStyle: {
            background: 'burlywood'
          },
          rowStyle: {
            background: 'lemonchiffon'
          }
        }}
      />
    </div>
  );
}
