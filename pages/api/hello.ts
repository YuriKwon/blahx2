import { NextApiRequest, NextApiResponse } from 'next';
import FirebaseAdmin from '@/models/firebase_admin';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  FirebaseAdmin.getInstance().Firebase.collection('test'); // test라는 컬렉션에 접근
  res.status(200).json({ name: 'John Doe' });
}
