import React from 'react';

export const UserContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">User Content Guidelines</h2>
      <p>The following terms apply to content submitted by you:</p>
      {/* Full user content guidelines section */}
      <div className="space-y-4">
        <p>
          The Websites may contain comments sections, discussion forums, or other interactive features ("Interactive Areas") in which you may post or upload user-generated content, comments, video, photos, messages, other materials or items (collectively, "User Content"). You are solely responsible for your use of any Interactive Areas and you use them at your own risk.
        </p>
        {/* Rest of user content guidelines */}
      </div>
    </div>
  );
};