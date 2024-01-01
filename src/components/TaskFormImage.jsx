import { useForm, Controller } from "react-hook-form";

export default function TaskForm({ onSubmit }) {
  const { handleSubmit, control } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="flex flex-col md:flex-row justify-between mt-5 mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <label htmlFor="taskType">Task Type:</label>
          <Controller
            name="taskType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} className="p-2 border w-full" required>
                <option value="">Select Task Type</option>
                <option value="detection">Detection</option>
                <option value="segmentation">Segmentation</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4 md:mb-0 md:w-1/2">
          <label htmlFor="confidentialThreshold">Confidential Threshold:</label>
          <Controller
            name="confidentialThreshold"
            control={control}
            defaultValue={25}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="p-2 border w-full"
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
          className="bg-indigo-800 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
