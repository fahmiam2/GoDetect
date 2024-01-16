import { useForm, Controller } from "react-hook-form";

export default function TaskForm({ onSubmit }) {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="mb-4">
        <label htmlFor="taskType">Task Type:</label>
        <Controller
          name="taskType"
          control={control}
          defaultValue="detection"
          render={({ field }) => (
            <select {...field} className="w-full border p-2" required>
              <option value="">Select Task Type</option>
              <option value="detection">Detection</option>
              <option value="segmentation">Segmentation</option>
            </select>
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confidentialThreshold">Confidential Threshold:</label>
        <Controller
          name="confidentialThreshold"
          control={control}
          defaultValue={25}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="w-full border p-2"
              min={25}
              max={100}
              required
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="chooseAnnotator">Choose Annotator:</label>
        <Controller
          name="chooseAnnotator"
          control={control}
          defaultValue="bounding_box"
          render={({ field }) => (
            <select {...field} className="w-full border p-2" required>
              <option value="">Select Annotator</option>
              <option value="bounding_box">Bounding Box</option>
              <option value="box_corner">Box Corner</option>
              <option value="color">Color</option>
              <option value="circle">Circle</option>
              <option value="dot">Dot</option>
              <option value="ellipse">Ellipse</option>
              <option value="halo">Halo</option>
              <option value="mask">Mask</option>
              <option value="polygon">Polygon</option>
            </select>
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="chooseTracer">Choose Tracer:</label>
        <Controller
          name="chooseTracer"
          control={control}
          defaultValue="none"
          render={({ field }) => (
            <select {...field} className="w-full border p-2" required>
              <option value="">Select Tracer</option>
              <option value="none">None</option>
              <option value="tracer">Tracer</option>
              <option value="heatmap">Heatmap</option>
            </select>
          )}
        />
      </div>

      <div>
        <button
          type="submit"
          className="rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-pictonBlue"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
