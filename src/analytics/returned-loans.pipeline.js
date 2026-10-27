import { notImplemented } from '../shared/http-error.js';

export function buildReturnedLoansPipeline() {
  // MES 2 : retirer l'echec provisoire et completer les quatre TODO ci-dessous.
  // La jointure, son unwind et le tri final sont fournis.
  return [
    {
      $match: {
        status: "RETURNED"
      }
    },
    { $lookup: { from: 'equipments', localField: 'equipmentId', foreignField: '_id', as: 'equipment' } },
    { $unwind: '$equipment' },
    {
      $match: {
        isArchived: false
      }
    },
    {
      $group: {
        _id: "$category",
        returnedCount: { $count: "$status" },
        averageDurationDays: {
          $round: [
            { avg: "$durationDays" },
            2
          ]
        }

      }
    },
    {
      $project: {
        _id: 0,
        category: 1,
        returnedCount: 1,
        averageDurationDays: 1,
      }
    },
    { $sort: { category: 1 } },
  ];
}
