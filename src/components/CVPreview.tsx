export function CVPreview({ HeaderInfo }) {
  return (
    <div className="p-5 bg-white w-1/2 h-50 rounded-2xl">
      <p>{HeaderInfo.name}</p>
      <p>{HeaderInfo.lastName}</p>
      <p>{HeaderInfo.profession}</p>
    </div>
  );
}
