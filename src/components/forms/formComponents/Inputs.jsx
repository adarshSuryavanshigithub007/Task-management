/* eslint-disable react/prop-types */
const Inputs = ({field,onChange}) => {
  console.log(field.field_label)
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
        {field.field_label}
        </label>
        <input
          type={field.field_type}
          className="form-control"
          id="exampleInputEmail1"
          placeholder={field.field_placeholder}
          required  = {field.field_required}
          onChange={onChange} 
          // aria-describedby="emailHelp"
        />
      
      </div>
    </div>
  );
};

export default Inputs;
