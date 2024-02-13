import { throwError } from '@/app/lib/actions';

export default async function ThrowErrorButton() {
  return (
    <form
      action={async () => {
        'use server';
        await throwError();
      }}
    >
      <button className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-400">
        Click me to throw an error
      </button>
    </form>
  );
}
