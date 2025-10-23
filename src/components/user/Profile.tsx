function Profile() {
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-20 h-20 rounded-full"
        src="/assets/profile.png"
        alt=""
      />
      <div className="font-medium dark:text-white">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Information:
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>First Name: Huy</li>
          <li>Last Name: Nguyen Trung</li>
          <li>Date of birth: 19/09/2000</li>
          <li>Sex: Male</li>
          <li>Joined in October 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
