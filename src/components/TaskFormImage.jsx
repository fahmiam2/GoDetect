import { useForm, Controller } from "react-hook-form";

export default function TaskForm({ onSubmit }) {
  const { handleSubmit, control } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="mb-4 md:mb-0 md:w-1/2">
        <label htmlFor="modelType">Model Type:</label>
        <Controller
          name="modelType"
          control={control}
          defaultValue="yolov8s"
          render={({ field }) => (
            <select {...field} className="w-full border p-2" required>
              <option value="">Select Model Type</option>
              <option value="yolov8n">YOLOv8n</option>
              <option value="yolov8s">YOLOv8s</option>
              <option value="yolov8m">YOLOv8m</option>
              <option value="yolov8l">YOLOv8l</option>
              <option value="yolov8x">YOLOv8x</option>
            </select>
          )}
        />
      </div>
      <div className="mb-4 mt-5 flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <label htmlFor="taskType">Task Type:</label>
          <Controller
            name="taskType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} className="w-full border p-2" required>
                <option value="">Select Task Type</option>
                <option value="detection">Detection</option>
                <option value="segmentation">Segmentation</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4 md:mb-0 md:w-1/2">
          <label htmlFor="confidenceThreshold">Confidence Threshold:</label>
          <Controller
            name="confidenceThreshold"
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
